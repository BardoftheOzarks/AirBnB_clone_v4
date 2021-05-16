$(document).addEventListener('DOMContentLoaded', function () {
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
});
