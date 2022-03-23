function navigation_lang(lang) {
	var main 	= document.getElementById('main');
	var make 	= document.getElementById('make'); 
	var help	= document.getElementById('help');
	if (lang == 'kk') {
		main.innerHTML = 'Басты';
		make.innerHTML = 'Тапсырыс';
		help.innerHTML = 'Көмек';
	};
};
function language_main(lang) {
	var welcome	= document.getElementById('welcome');
	var start	= document.getElementById('start');
	var welcome_text	= document.getElementById('welcome_text');
	var alert_title		= document.getElementById('alert_title');
	var alert_text		= document.getElementById('alert_text');
	var free_tarif_title= document.getElementById('free_tarif_title');
	var free_tarif  	= document.getElementById('free_tarif');
	var about_project	= document.getElementById('about_project');
	var get_tarif_1		= document.getElementById('get_tarif_1');
	var get_tarif_2		= document.getElementById('get_tarif_2'); 
	var get_order		= document.getElementById('get_order');
	var premium_tarif	= document.getElementById('premium_tarif');
	var premium_tarif_title = document.getElementById('premium_tarif_title');
	var lang_summary = document.getElementById('lang_summary'); 
	var modal_title = document.getElementById('modal_title');
	var modal_close = document.getElementById('modal_close');
	var modal_message = document.getElementById('modal_message');
	navigation_lang(lang)
	if (lang == 'kk') { 
		welcome.innerHTML 	   = 'Қош келдіңіз!';
		welcome_text.innerHTML = 'Бұл жерде сіз көрпешенің дизайнын дайын өрнектермен құрастыра аласыз, БАСТАУ-ды басыңыз';
		start.innerHTML		   = 'БАСТАУ';
		alert_title.innerHTML  = 'Тапсырыс орындау!';
		alert_text.innerHTML   = 'Егер сіз тігінші болсаңыз сайтқа тіркелу арқылы көрпеше тігуге тапсырыcтар қабылдай аласыз';
		free_tarif_title.innerHTML = 'Тегін аккаунт';
		premium_tarif_title.innerHTML = 'Премиум аккаунт';
		free_tarif.innerHTML	   = '<div class="tarif-about" id="free_tarif"><ul><li><span>✔</span> Жалпы құны</li>	<li><span>✔</span> Телефон</li><li><span>✔</span> Дизайн</li>	<li><span>❌</span> WhatsApp</li><li><span>❌</span> Көрпеше саны</li><li><span>❌</span> Ою-өрнектер</li>	</ul></div>';
		premium_tarif.innerHTML	   = '<div class="tarif-about" id="free_tarif"><ul><li><span>✔</span> Жалпы құны</li>	<li><span>✔</span> Телефон</li><li><span>✔</span> Дизайн</li>	<li><span>✔</span> WhatsApp</li><li><span>✔</span> Көрпеше саны</li><li><span>✔</span> Ою-өрнектер</li>	</ul></div>';
		about_project.innerHTML    = 'Жоба жайында';
		get_tarif_1.innerHTML	   = 'Таңдау';
		get_tarif_2.innerHTML	   = 'Таңдау'; 
		lang_summary.innerHTML	   = 'Тілді өзгерту';
		modal_title.innerHTML = 'Жоба даму үстінде';
		modal_close.innerHTML = 'Жабу';
		modal_message.innerHTML = 'Дәл қазіргі уақытта жаба жетілдіріліп жатыр, бірақ сыз қаржылай қолдау көрсете аласыз: Каспий: +7478160485 Ерлан Аяпов';
	};
};

function language_creat(lang) {
	var get_images	= document.getElementById('get_images');
	var get_order	= document.getElementById('get_order');
	var id_comment	= document.getElementById('id_comment');
	var id_client_first_name	= document.getElementById('id_client_first_name');
	var id_client_last_name	= document.getElementById('id_client_last_name');
	var id_price	= document.getElementById('id_price');
	var mk_ord		= document.getElementById('mk_ord');
	navigation_lang(lang)
	if (lang == 'kk') {
		get_images.innerHTML			 = 'Тапсырыс беру';
		get_order.innerHTML 			 = 'Тапсырыс беру';
		id_comment.placeholder 			 = 'Тапсырысқа қосымша талаптар';
		id_client_first_name.placeholder = 'Аты';
		id_client_last_name.placeholder  = 'Жөні';
		mk_ord.innerHTML 				 = 'Жіберу';
	};
};

function language_register(lang) {
	var username	= document.getElementById('username1')
	var password 	= document.getElementById('password')
	var id_username	= document.getElementById('id_username')
	var password1 	= document.getElementById('id_password1')
	var password2	= document.getElementById('id_password2')
	var go_to		= document.getElementById('go_to')
	var btn_next	= document.getElementById('btn_next')

	navigation_lang(lang)
	if (lang == 'kk') {
		username.placeholder = 'Қолданушы атауы';
		password.placeholder = 'Құпия сөз';
		id_username.placeholder = 'Қолданушы атауы';
		password1.placeholder = 'Құпия сөз';
		password2.placeholder = 'Құпия сөз қайта жазыңыз';
		go_to.innerHTML = 'Сізде <a href="authentication/">аккаунт</a> бар ма?';
		btn_next.innerHTML = 'Алға' 

	}

}