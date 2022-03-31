function navigation_lang(lang) {
	var main 	= document.getElementById('main');
	var make 	= document.getElementById('make'); 
	var help	= document.getElementById('help');
	if (lang == 'kk') {
		main.innerHTML = 'Басты';
		make.innerHTML = 'Тапсырыс';
		help.innerHTML = 'Көмек';
	} else if (lang == 'ru') {
		main.innerHTML = 'Дом';
		make.innerHTML = 'Заказать';
		help.innerHTML = 'Помощь';
	};
};
function language_main(lang) { 
	var main_welcome = document.getElementById('main_welcome');
	var main_about	 = document.getElementById('main_about');
	var lang_summary = document.getElementById('lang_summary');
	navigation_lang(lang)
	if (lang == 'kk') { 
		main_welcome.innerHTML	= 'Қош келдіңіз!'
		main_about.innerHTML	= 'Бұл көрпеше дизайнын жасауға арналған платформа. Дайын ою-өрнектерді таңдау арқылы сіз көрпеше дизайнын құрастыра аласыз және оны тігетін шеберді таба аласыз'
		lang_summary.innerHTML	= 'Тілді ауыстыру'
	} else if (lang == 'ru') {
		main_welcome.innerHTML = 'Добро пожаловать!'
		main_about.innerHTML = 'Платформа предназначена для создание дизайна ковриков, выбирая готовые орнаменты вы можете легко и быстро создать собственный дизайн коврика. И за одно можно найти мастера для сшитья этого коврика.'
		lang_summary.innerHTML	= 'Выбрать язык'
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
	}
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
		username.placeholder	= 'Қолданушы атауы';
		password.placeholder	= 'Құпия сөз';
		id_username.placeholder = 'Қолданушы атауы';
		password1.placeholder	= 'Құпия сөз';
		password2.placeholder	= 'Құпия сөз қайта жазыңыз';
		go_to.innerHTML			= 'Сізде <a href="authentication/">аккаунт</a> бар ма?';
		btn_next.innerHTML		= 'Алға' 
	} 
};