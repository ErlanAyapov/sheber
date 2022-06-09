function navigation_lang(lang) {
	var main 	= document.getElementById('main');
	var make 	= document.getElementById('make'); 
	var help	= document.getElementById('help');
	if (lang == 'kk') {
		main.innerHTML = 'Басты';
		make.innerHTML = 'Тапсырыс';
		help.innerHTML = 'Шеберхана';
	} else if (lang == 'ru') {
		main.innerHTML = 'Дом';
		make.innerHTML = 'Заказать';
		help.innerHTML = 'Мастерская';
	};
};
function language_main(lang) { 
	var main_welcome = document.getElementById('main_welcome');
	var main_about	 = document.getElementById('main_about');
	var lang_summary = document.getElementById('lang_summary'); 
	navigation_lang(lang)
	if (lang == 'kk') { 
		main_welcome.innerHTML	= 'Қош келдіңіз!';
		main_about.innerHTML	= 'Бұл көрпеше дизайнын жасауға арналған платформа. Дайын ою-өрнектерді таңдау арқылы сіз көрпеше дизайнын құрастыра аласыз және оны тігетін шеберді таба аласыз. <a href="members/">Тіркеліп</a> бір күнге тегін жазылым алыңыз!';
		lang_summary.innerHTML	= 'Тілді ауыстыру';
	} else if (lang == 'ru') {
		main_welcome.innerHTML = 'Добро пожаловать!';
		main_about.innerHTML = 'Платформа предназначена для создание дизайна ковриков, выбирая готовые орнаменты вы можете легко и быстро создать собственный дизайн коврика. И за одно можно найти мастера для сшитья этого коврика. <a href="members/">Зарегистрируйтесь</a> и получите подписку бесплатно на один день!';
		lang_summary.innerHTML	= 'Выбрать язык';
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

function language_profile(lang) {  
	var update_picture_link = document.getElementById('update_picture_link');
	var id_username			= document.getElementById('id_username');
	var id_first_name 		= document.getElementById('id_first_name');
	var id_last_name 		= document.getElementById('id_last_name');
	var id_email 			= document.getElementById('id_email');
	var profile_save_id 	= document.getElementById('profile_save_id');
	var logout 				= document.getElementById('logout');


	navigation_lang(lang)
	if (lang == 'kk') {
		update_picture_link.text 	= 'Суретті өзгерту';
		id_username.placeholder 	= 'Қолданушы атауы';
		id_first_name.placeholder 	= 'Есімі';
		id_last_name.placeholder 	= 'Тегі';
		id_email.placeholder 		= 'Почта';
		profile_save_id.innerText	= 'Сақтау';
		logout.text 				= 'Шығу';

	} else if (lang == 'ru') {
		update_picture_link.text 	= 'Изменть изоброжение';
		id_username.placeholder 	= 'Қолданушы атауы';
		id_first_name.placeholder 	= 'Имя';
		id_last_name.placeholder 	= 'Фамилия';
		id_email.placeholder 		= 'Почта';
		profile_save_id.innerText	= 'Сохранить';
		logout.text 				= 'Выйти';

	};
}; 
function language_all_orders(lang) {
	var all_orders_text = document.getElementById('all_orders_text');
	var orders_link = document.getElementsByClassName('order_btn');
	console.log(orders_link)

	navigation_lang(lang)
	if (lang == 'kk') {
		all_orders_text.innerText = 'Барлық тапсырыстар' 
		for (var i = 0; i < orders_link.length; i++) {
			orders_link[i].innerText = 'Тапсырысты көру';
		}
	} else if (lang == 'ru') {
		all_orders_text.innerText = 'Все заказы'
		// orders_link.innerText = 'Посмотреть заказ';
		for (var i = 0; i < orders_link.length; i++) {
			orders_link[i].innerText = 'Посмотреть заказ';
		}
	}

};