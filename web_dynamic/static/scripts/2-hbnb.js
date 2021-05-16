// script that listens for changes
$(function () {
  let amenityList = [];
  $('input[name=checkbox]').change(function () {
    const dataId = $('#popover').get(0).id;
    if ($('INPUT').is(':checked')) {
      amenityList = amenityList.push(dataId);
    } else {
      amenityList = amenityList.filter(':checked');
    }
    $('DIV.amenities H4').html(amenityList.join(', '));
  });
});

$(function () {
  $.getJSON('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
});
