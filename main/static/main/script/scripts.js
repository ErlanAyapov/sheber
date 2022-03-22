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
// data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABRwAAAj8CAYAAAAm8SYzAAAAAXNSR0IArs4c6QAAAARnQU1BAACx
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
		$(".maker-block").css("background","yellow")
		// console.log('HHH')
	} else if (bg[1].checked) {
		$(".maker-block").css("background","blue")
	} else if (bg[2].checked) {
		$(".maker-block").css("background","lightgreen")
	} else if (bg[3].checked) {
		$(".maker-block").css("background","gray")
	} else if (bg[4].checked) {
		$(".maker-block").css("background","white")
	} else if (bg[5].checked) {
		$(".maker-block").css("background","magenta")
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
	document.getElementById('range_res').innerHTML ='Количество: ' + 1 + '<br> Общая цена: ' + price + '₸';

	number = document.getElementById('id_number')
	document.getElementById('id_number').onchange = function() {
		document.getElementById('range_res').innerHTML ='Количество: ' + number.value + '<br> Общая цена: ' + price * number.value + '₸';
		document.getElementById('id_price').value = price * number.value;

	}
};	
// document.getElementById('block_1').innerHTML = answers[fake_answer_1];

 
// el.onmousedown = function (e) {
//     if (window.event.stopPropagation) window.event.stopPropagation();
//     window.event.cancelBubble = true;
//     e.cancelBubble = true;
// }
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
	language_select('kk')		
	$(".language-container").css("display","none")
});
jQuery('#russkiy').on('click', function() {	
	localStorage.clear();
	localStorage.setItem('language', 'ru')	
	language_select('ru')	
	$(".language-container").css("display","none")
});
console.log(localStorage.getItem('language'))
if (localStorage.getItem('language')) {
	$(".language-container").css("display","none")
} else {
	$(".language-container").css("display","block")

}