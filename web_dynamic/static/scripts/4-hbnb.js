let amenityList = [];
$(function () {
  $('input[type=checkbox]').change(function () {
    const dataId = $(this).attr('data-id');
    const dataName = $(this).attr('data-name');
    if ($(this).is(':checked')) {
      amenityList.push({ dataName: dataName, dataId: dataId });
    } else {
      amenityList = amenityList.filter((each) => each !== dataName);
    }
    $('DIV.amenities H4').html(amenityList.map(each => each.dataName).join(', '));
  });

  $.getJSON('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });

  $.ajax({
    type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    data: '{}',
    contentType: 'application/json',
    success: function (data) {
      for (let i = 0; i < data.length; i++) {
        const place = data[i];
        $('.places').append('<article><div class=“title_box”><h2>' + place.name + '</h2><div class=“price_by_night”>$' + place.price_by_night + '</div></div><div class=“information”><div class=“max_guest”>' + place.max_guest + ' Guest</div><div class=“number_rooms”>' + place.number_rooms + ' Bedroom</div><div class=“number_bathrooms”>' + place.number_bathrooms + ' Bathroom</div></div><div class=“description”>' + place.description + '</div></article>');
      }
    }
  });

  $('button').click(function () {
    $('.places').empty();
    $.ajax({
      type: 'POST',
      url: 'http://0.0.0.0:5001/api/v1/places_search/',
      data: JSON.stringify({ amenities: (amenityList.map(item => item.dataId)) }),
      contentType: 'application/json',
      success: function (data) {
        for (let i = 0; i < data.length; i++) {
          const place = data[i];
          $('.places').append('<article><div class=“title_box”><h2>' + place.name + '</h2><div class=“price_by_night”>$' + place.price_by_night + '</div></div><div class=“information”><div class=“max_guest”>' + place.max_guest + ' Guest</div><div class=“number_rooms”>' + place.number_rooms + ' Bedroom</div><div class=“number_bathrooms”>' + place.number_bathrooms + ' Bathroom</div></div><div class=“description”>' + place.description + '</div></article>');
        }
      }
    });
  });
});
