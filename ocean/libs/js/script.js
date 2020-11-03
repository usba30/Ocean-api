	$('#btnRun').click(function() {

		$.ajax({
			url: "libs/php/getCountryInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: parseFloat($('#lat').val()),
				lng: parseFloat($('#lng').val())
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#txtDistance').html(result['data']['distance']);
					$('#txtGeonameId').html(result['data']['geonameId']);
					$('#txtName').html(result['data']['name']);
					

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	

	});