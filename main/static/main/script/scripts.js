function border_click() {
	var border_name = document.getElementsByName('border_ornament');
	var border_content = document.getElementsByClassName('border_content_inner');
	for (var i = border_name.length - 1; i >= 0; i--) {
		if (border_name[i].checked) {
			for(var d = 0; d < border_content.length; d++)
				border_content[d].style.display='none';
			border_content[i].style.display = 'block';
		};
	};
};
function center_content() {
	var center_name = document.getElementsByName('center_ornament');
	var center_content_top = document.getElementsByClassName('border_content_inner_top');
	var center_content_bottom = document.getElementsByClassName('border_content_inner_bottom');

	for (var i = center_name.length - 1; i >= 0; i--) {
		if (center_name[i].checked) {
			for(var d = 0; d < center_content_top.length; d++) {
				center_content_bottom[d].style.display='none';
				center_content_top[d].style.display='none';
			};
			center_content_top[i].style.display = 'block';
			center_content_bottom[i].style.display = 'block';
		};
	};
};
function bg_pos() {
	var bg = document.getElementsByName('bg_pos');
	if (bg[0].checked) {
		$(".maker-block").css("background","yellow")
		console.log('HHH')
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
	
};

el.onmousedown = function (e) {
    if (window.event.stopPropagation) window.event.stopPropagation();
    window.event.cancelBubble = true;
    e.cancelBubble = true;
}
$("img, a").on("dragstart", function(event) { event.preventDefault(); });