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
