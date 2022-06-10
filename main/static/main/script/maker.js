function geoFindMe() {
	const status = document.querySelector('#status');
	const input_latitude = document.querySelector('#id_latitude');
	const input_longitude = document.querySelector('#id_longitude');

	input_latitude.value = 'Не известно';
	input_longitude.value = 'Не известно';

	function success(position) {
		const latitude  = position.coords.latitude;
		const longitude = position.coords.longitude; 

		input_latitude.value = latitude;
		input_longitude.value = longitude;
	}

	function error() {
		input_latitude.value = 'Не известно';
		input_longitude.value = 'Не известно';
	}

	if (!navigator.geolocation) {
		input_latitude.value = 'Geolocation не поддерживается';
		input_longitude.value = 'Geolocation не поддерживается';
	} else { 
		navigator.geolocation.getCurrentPosition(success);
	} 

}


function fun1() {
	var rad = document.getElementsByName('r1');
	var hd;
	if (rad[1].checked) {
		$("#ex_2").css("display","none")
		$("#ex_1").css("display","none")
	  	$("#ex_3").css("display","block")
	  	$("#ex_4").css("display","block")
	  	$("#ex_5").css("display","none")
	  	$("#ex_6").css("display","none")
	} 
	else if (rad[0].checked) {
		$("#ex_2").css("display","block")
		$("#ex_1").css("display","block")  	
		$("#ex_3").css("display","none")
		$("#ex_4").css("display","none")
		$("#ex_5").css("display","none")
		$("#ex_6").css("display","none")
	}
	else if (rad[2].checked) {
		$("#ex_2").css("display","none")
		$("#ex_1").css("display","none")
		$("#ex_3").css("display","none")
		$("#ex_4").css("display","none")
		$("#ex_5").css("display","block")
		$("#ex_6").css("display","block")
	}
}

function bg_pos() {
	var bg = document.getElementsByName('bg_pos');
	if (bg[0].checked) {
		$(".maker-block").css("background","fec4d2")
	} else if (bg[1].checked) {
		$(".maker-block").css("background","#f0f1f6")
	} else if (bg[2].checked) {
		$(".maker-block").css("background","#778f51")
	} else if (bg[3].checked) {
		$(".maker-block").css("background","#acc38b")
	} else if (bg[4].checked) {
		$(".maker-block").css("background","white")
	} else if (bg[5].checked) {
		$(".maker-block").css("background","#f8e5c7")
	}

}

function border() {
	var border = document.getElementsByName('border_button');
	if (border[0].checked) {
		$("#border_1").css("display","block")
		$("#border_2").css("display","none")
	} else if (border[1].checked) {
		$("#border_2").css("display","block")
		$("#border_1").css("display","none")
	}
}
    
jQuery('.fa-check').on('click', function() {
	$(".order-model").css("display","block")
	
});
jQuery('.fa-times').on('click', function() {
	$(".order-model").css("display","none")
});

function screen_shot(){
	html2canvas(document.getElementById("content")).then(function(canvas) {
		var logo = document.getElementById('id_des_image');
		var my_screen = canvas.toDataURL();
		logo.value = my_screen;
		document.getElementById('rm').src = my_screen;
		
	});	
	console.log('sss');
	
};

function encodeImageFileAsURL(element, input_id) {
    const input_base64 = document.getElementById(input_id);
    var file = element.files[0];
    var reader = new FileReader();
    var base64;
    reader.onloadend = function() {
        input_base64.value = reader.result;
        $('#blah').attr('src', reader.result);
        $('#blah').attr('alt', 'таңдалды');
        $("#blah").css("display", 'block');
        $("#btn_upd").css("display", 'block');
    }
    reader.readAsDataURL(file);
    // reader.readAsDataURL(element.files[0]);        
}
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
            .attr('src', e.target.result)
            };

            reader.readAsDataURL(input.files[0]);
        }
}
