document.addEventListener("DOMContentLoaded", function() {
	var loadet_content = document.querySelector('.language-block-container');
	var load_animation= document.querySelector('.load-main-block');
	loadet_content.style.display = 'block';
	load_animation.style.display = 'none';
})

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
}

function picture_load(image) { 
	for (l = image.length - 1; l>= 0; l--) {
	console.log(image[l].src.substr(-50, 30));
	$('<div class="border_content_inner_bottom"><img src="'+image[l].src+'"width="160"unselectable="on"></div>').insertAfter('p');

};}


function border_click() {
	var border_name = document.getElementsByName('border_ornament');
	var border_content = document.getElementsByClassName('border_content_inner');
	var border_img = document.getElementsByName('border_img');
	for (var i = border_name.length - 1; i >= 0; i--) {
		if (border_name[i].checked) {
			
			for(var d = 0; d < border_content.length; d++) {
				price = 0
				border_content[d].style.display='none';
			}
			border_content[i].style.display = 'block';
			borderImgText = border_img[i].src.substr(-50, 30);
			price_b = eval(border_price[i])
		};
	};
};
function center_content() {
	var center_name = document.getElementsByName('center_ornament');
	var center_content_top = document.getElementsByClassName('border_content_inner_top');
	var center_content_bottom = document.getElementsByClassName('border_content_inner_bottom');
	var center_img = document.getElementsByName('center_im');


	for (var i = center_name.length - 1; i >= 0; i--) {
		if (center_name[i].checked) {
			for(var d = 0; d < center_content_top.length; d++) {
				center_content_bottom[d].style.display='none';
				center_content_top[d].style.display='none';
				price = 0
			};
			center_content_top[i].style.display = 'block';
			center_content_bottom[i].style.display = 'block';
			centerImgText = center_img[i].src.substr(-50, 30) 
			price_c = eval(center_price[i])

		};
	};
};
function bg_pos() {
	var bg = document.getElementsByName('bg_pos');
	if (bg[0].checked) {
		$(".maker-block").css("background","#fec4d2")
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
function screen_shot(){
	html2canvas(document.getElementById("content")).then(function(canvas) {
		var logo = document.getElementById('id_des_image');
		var my_screen = canvas.toDataURL();
		
		logo.value = my_screen;
		document.getElementById('rm').src = my_screen;
	});	
	$(".form-modal-container-my").css("top","0")
	$("#rm").css("display","block")
	var data = borderImgText + " " + centerImgText;
	price = price_c + price_b + 1000
	document.getElementById('id_price').value = price;
	document.getElementById('id_ornament_info').value = data;
	if (lang == 'kk') {
		document.getElementById('range_res').innerHTML ='Көрпеше саны: ' + 1 + '<br> Жалпы құны: ' + price + '₸';
	} else {
		document.getElementById('range_res').innerHTML ='Количество: ' + 1 + '<br> Общая цена: ' + price + '₸';	
	}
	number = document.getElementById('id_number')
	document.getElementById('id_number').onchange = function() {
		if (lang == 'kk') {
			document.getElementById('range_res').innerHTML ='Көрпеше саны: ' + number.value + '<br> Жалпы құны: ' + price * number.value + '₸';
			document.getElementById('id_price').value = price * number.value;
		} else {
			document.getElementById('range_res').innerHTML ='Количество: ' + number.value + '<br> Общая цена: ' + price * number.value + '₸';
			document.getElementById('id_price').value = price * number.value;
		};
	};
};	 
$("img, a").on("dragstart", function(event) { event.preventDefault(); });

function close_modal() {
	$(".form-modal-container-my").css("top","-100%")
	$("#rm").css("display","none")
};
function close_info() {
	$(".delete-info").css("display","none")
};
jQuery('#news_block_open').on('click', function() {
	$(".block-left").css("left","0")
	$(".block-left").css("position","absolute")
	$("#news_block_close").css("display","block")
	$(".about-content").css("display","none")
});
jQuery('#news_block_close').on('click', function() {
	$(".block-left").css("left","-100%")
	$(".block-left").css("position","absolute")
	$(".about-content").css("display","block")
	$("#news_block_close").css("display","none")
	$("#news_block_open").css("display","block")
});

jQuery('.get-tarif').on('click', function() {			
	$(".modal-finance").css("display","block")
});
jQuery('.modal-close').on('click', function() {			
	$(".modal-finance").css("display","none")
});
jQuery('#qazaqsha').on('click', function() {
	localStorage.clear();	
	localStorage.setItem('language', 'kk')
	language_main('kk')		
	$(".language-container").css("display","none")
});
jQuery('#russkiy').on('click', function() {	
	localStorage.clear();
	localStorage.setItem('language', 'ru')	
	language_main('ru')	
	$(".language-container").css("display","none")
});
console.log(localStorage.getItem('language'))
if (localStorage.getItem('language')) {
	$(".language-container").css("display","none")
} else {
	$(".language-container").css("display","block")

}

$('input').on('input invalid', function() {
	this.setCustomValidity('')
	if (this.validity.valueMissing) {
		if (lang == 'kk')
			this.setCustomValidity("Осы жолақты толтыру міндетті")
	}
	if (this.validity.typeMismatch) {
		if (lang == 'kk')
			this.setCustomValidity("Енгізілген деректер типі сәйкес емес")
	}
	if (this.validity.patternMismatch) {
		if (lang == 'kk')
			this.setCustomValidity("Паттернге сәйкес емес")
	}
})
$('textarea').on('input invalid', function() {
	this.setCustomValidity('')
	if (this.validity.valueMissing) {
		if (lang == 'kk')
			this.setCustomValidity("Осы жолақты толтыру міндетті")
	}
	if (this.validity.typeMismatch) {
		if (lang == 'kk')
			this.setCustomValidity("Енгізілген деректер типі сәйкес емес")
	}
	if (this.validity.patternMismatch) {
		if (lang == 'kk')
			this.setCustomValidity("Паттернге сәйкес емес")
	}
}) 
jQuery('#select_kazakh').on('click', function() {
	localStorage.clear();	
	localStorage.setItem('language', 'kk')
	language_main('kk')
});
jQuery('#select_russkiy').on('click', function() {	
	localStorage.clear();
	localStorage.setItem('language', 'ru')	
	language_main('ru')

});

jQuery('#feedback_btn').on('click', function() {	 
	$('.my-feedback-modal').css('display',' block');
});
jQuery('.my-feedback-modal .btn-secondary').on('click', function() {	 
	$('.my-feedback-modal').css('display',' none');
});