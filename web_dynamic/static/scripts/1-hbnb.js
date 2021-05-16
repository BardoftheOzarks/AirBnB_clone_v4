$(function () {
  let amenityList = [];
  $('input[name=checkbox]').change(function () {
    const dataId = $(this).attr('data-id');
    const dataName = $(this).attr('data-name');
    if ($('INPUT').is(':checked')) {
      amenityList = amenityList.push(dataName);
    } else {
      amenityList = amenityList.filter(':checked');
    }
    $('DIV.amenities H4').html(amenityList.join(', '));
  });
});
