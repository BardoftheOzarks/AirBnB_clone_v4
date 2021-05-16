$(function () {
  let amenity_list = [];
  $('input[name=checkbox]').change(function () {
    const data_id = $('#popover').get(0).id;
    if ($('INPUT').is(':checked')) {
      amenity_list = amenity_list.push(data_id);
    } else {
      amenity_list = amenity_list.filter(':checked');
    }
    $('DIV.amenities H4').html(amenity_list.join(', '));
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

$(function () {
  $.ajax({
    type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    data: {},
    success: success,
    contentType: application / json
  });
});
