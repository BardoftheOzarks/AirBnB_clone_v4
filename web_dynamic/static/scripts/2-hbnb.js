// script that listens for changes
$(function () {
  let amenityList = [];
  $('input[type=checkbox]').change(function () {
    //    const dataId = $(this).attr('data-id');
    const dataName = $(this).attr('data-name');
    if ($(this).is(':checked')) {
      amenityList.push(dataName);
    } else {
      amenityList = amenityList.filter((each) => each !== dataName);
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
