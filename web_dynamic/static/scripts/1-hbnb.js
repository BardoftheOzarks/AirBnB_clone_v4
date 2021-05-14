$(document).addEventListener("DOMContentLoaded", function() {
    $(function () {
	let amenity_list = []
	$('input[name=checkbox]').change(function () {
	    let data_id = $('#popover').get(0).id;
	    if ($('INPUT').is(':checked')) {
                amenity_list = amenity_list.push(data_id);
	    }
	    else {
		amenity_list = amenity_list.filter(":checked")
	    }
	    $('DIV.amenities H4').html(amenity_list.join(', '));
	});
    });
});
