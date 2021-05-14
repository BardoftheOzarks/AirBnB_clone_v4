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
$(function() {
    $.getJSON( "http://0.0.0.0:5001/api/v1/status/", function( data ) {
	if (data.status === 'OK') {
	    $('DIV#api_status').addClass("available");
	} else {
	    $('DIV#api_status')removeClass('available');
	}
    });
});
