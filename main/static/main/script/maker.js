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
		$(".bor").css("background","yellow")
	} else if (bg[1].checked) {
		$(".bor").css("background","blue")
	} else if (bg[2].checked) {
		$(".bor").css("background","lightgreen")
	} else if (bg[3].checked) {
		$(".bor").css("background","gray")
	} else if (bg[4].checked) {
		$(".bor").css("background","white")
	} else if (bg[5].checked) {
		$(".bor").css("background","magenta")
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
	
};