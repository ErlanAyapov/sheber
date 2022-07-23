function navigation_lang(lang) {
	var main 	= document.getElementById('main');
	var make 	= document.getElementById('make'); 
	var help	= document.getElementById('help');
	if (lang == 'kk') {
		main.innerHTML = 'Басты';
		make.innerHTML = 'Шеберхана';
		help.innerHTML = 'Тапсырыстар';
	} else if (lang == 'ru') {
		main.innerHTML = 'Дом';
		make.innerHTML = 'Мастерская';
		help.innerHTML = 'Заказы';
	};
};
function language_main(lang) { 
	var main_welcome 	= document.getElementById('main_welcome');
	var main_about	 	= document.getElementById('main_about');
	var lang_summary 	= document.getElementById('lang_summary'); 
	var card_title 		= document.getElementById('card_title');
	var nav_title 		= document.getElementById('nav_title');
	var card_title_1 	= document.getElementById('card_title_1');
	var card_message_1 	= document.getElementById('card_message_1');
	var card_link_1 	= document.getElementById('card_link_1');
	var card_title_2 	= document.getElementById('card_title_2');
	var card_message_2 	= document.getElementById('card_message_2');
	var card_link_2 	= document.getElementById('card_link_2');
	var nav_link 		= document.getElementById('nav_link');


	navigation_lang(lang)
	if (lang == 'kk') { 
		lang_summary.innerText		= 'Изменить язык';
		main_welcome.innerHTML		= 'Қош келдіңіз!';
		main_about.innerHTML		= 'Бұл көрпеше дизайнын жасауға арналған платформа. Дайын ою-өрнектерді таңдау арқылы сіз көрпеше дизайнын құрастыра аласыз және оны тігетін шеберді таба аласыз. Тапсырыс беру тегін!';
		card_title.innerText		= 'Кез-келген сұрақты шешеміз!'
		card_title_1.innerHTML		= '<i class="far fa-user"></i> Жоба менеджері';
		card_message_1.innerHTML	= '<i class="far fa-address-card"></i> Жобаға байланысты іскерлік ұсыныстар болса маған хабарласыңыз!';
		card_link_1.innerHTML 		= '<i class="fab fa-whatsapp"></i> Байланысу';
		card_title_2.innerHTML		= '<i class="far fa-user"></i> Сату менеджері';
		card_message_2.innerHTML	= '<i class="far fa-address-card"></i> Мен сізге премиум аккаунт алу үшін көмектесемін!';
		card_link_2.innerHTML 		= '<i class="fab fa-whatsapp"></i> Байланысу';
		nav_title.innerText 		= 'Тегін бастау үшін';
		nav_link.innerText 			= 'Басыңыз';
	} else if (lang == 'ru') {
		lang_summary.innerText		= 'Тілді ауыстыру';
		main_welcome.innerHTML 		= 'Добро пожаловать!';
		main_about.innerHTML 		= 'Платформа предназначена для создание дизайна ковриков, выбирая готовые орнаменты вы можете легко и быстро создать собственный дизайн коврика. И за одно можно найти мастера для сшитья этого коврика. Оформит заказ бесплатно!';
		card_title.innerText		= 'Поможем в любом плане!'
		card_title_1.innerHTML		= '<i class="far fa-user"></i> Менеджер проекта';
		card_message_1.innerHTML	= '<i class="far fa-address-card"></i> Что бы предлагать деловые сотрудничество обращайтесь ко мне!';
		card_link_1.innerHTML 		= '<i class="fab fa-whatsapp"></i> Связаться';
		card_title_2.innerHTML		= '<i class="far fa-user"></i> Менеджер по продажам';
		card_message_2.innerHTML	= '<i class="far fa-address-card"></i> Я помогу вам что бы приобрести премиум аккаунт!';
		card_link_2.innerHTML 		= '<i class="fab fa-whatsapp"></i> Связаться';
		nav_title.innerText 		= 'Нажмите что бы';
		nav_link.innerText 			= 'Начать';
	};
};

function language_creat(lang) {
	var get_images				= document.getElementById('get_images');
	var get_order				= document.getElementById('get_order');
	var id_comment				= document.getElementById('id_comment');
	var id_client_first_name	= document.getElementById('id_client_first_name');
	var id_client_last_name		= document.getElementById('id_client_last_name');
	var id_price				= document.getElementById('id_price');
	var mk_ord					= document.getElementById('mk_ord');
	var id_sterm 				= document.getElementById('id_sterm');
	navigation_lang(lang);
	if (lang == 'kk') {
		get_images.innerHTML			 = 'Тапсырыс беру';
		get_order.innerHTML 			 = 'Тапсырыс беру';
		id_comment.placeholder 			 = 'Тапсырысқа қосымша талаптар';
		id_client_first_name.placeholder = 'Аты';
		id_client_last_name.placeholder  = 'Жөні';
		mk_ord.innerHTML 				 = 'Жіберу';
		id_sterm.placeholder 			 = 'Тапсырыстың орындалу мерзімі'
	}
};

function language_register(lang) {
	var username	= document.getElementById('username1');
	var password 	= document.getElementById('password');
	var id_username	= document.getElementById('id_username');
	var password1 	= document.getElementById('id_password1');
	var password2	= document.getElementById('id_password2');
	var go_to		= document.getElementById('go_to');
	var btn_next	= document.getElementById('btn_next');
	var rec_text	= document.querySelector('.register-recomendation-block p');
	var policy_text = document.getElementById('policy_text');
	var policy_link = document.getElementById('policy_link');
	navigation_lang(lang)

	if (lang == 'kk') {
		username.placeholder	= 'Қолданушы атауы';
		password.placeholder	= 'Құпия сөз';
		id_username.placeholder = 'Қолданушы атауы';
		password1.placeholder	= 'Құпия сөз';
		password2.placeholder	= 'Құпия сөз қайта жазыңыз';
		go_to.innerHTML			= 'Сізде <a href="authentication/">аккаунт</a> бар ма?';
		btn_next.innerHTML		= 'Алға';
		rec_text.innerText 		= 'Тапсырыстар алу үшін тіркеліңіз!';
		policy_text.innerText 	= 'Мен ережелермен таныстым.';
		policy_link.innerText 	= 'Ережелерді көру';
		policy_link.href 		= '/help/documentation-kz/';;
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
	var sub_sterm 			= document.getElementById('sub_sterm');
	var sub_text_1 			= document.getElementById('sub_text_1');
	var sub_text_2 			= document.getElementById('sub_text_2');
	var sub_text_link_2		= document.getElementById('sub_text_link_2');
	var sub_text_3			= document.getElementById('sub_text_3');
	var profile_summary		= document.getElementById('profile_summary');
	var profile_c_username	= document.getElementById('profile_c_username');
	var profile_f_name		= document.getElementById('profile_f_name');
	var profile_l_name		= document.getElementById('profile_l_name');
	var profile_l_link		= document.getElementById('profile_l_link');
	var order_detail_button = document.getElementsByClassName('order-detail-button');
	var new_orders			= document.getElementById('new_orders');
	var oll_orders_page		= document.getElementById('oll_orders_page');

	navigation_lang(lang)
	if (lang == 'kk') {
		update_picture_link.text 		= 'Суретті өзгерту';
		id_username.placeholder 		= 'Қолданушы атауы';
		id_first_name.placeholder 		= 'Есімі';
		id_last_name.placeholder 		= 'Тегі';
		id_email.placeholder 			= 'Почта';
		profile_save_id.innerText		= 'Сақтау';
		logout.text 					= 'Шығу';
		sub_sterm.innerText 			= 'Жазылым уақыты';
		sub_text_2.innerText 			= 'Бүгін жазылымның соңғы күні';
		sub_text_link_2.innerText 		= 'уақытты ұзарту үшін басыңыз';
		profile_summary.innerText		= 'Жазылымға қажет ақпарат';
		profile_c_username.innerText 	= 'Қолданушы атауы:';
		profile_l_name.innerText 		= 'Тегі:';
		profile_f_name.innerText 		= 'Есімі:';
		profile_l_link.innerText 		= 'Ақпаратты әкімшілікке жіберу';
		new_orders.innerText  			= 'Жаңа тапсырыстар';
		oll_orders_page.innerText 		= 'Барлық тапсырыстарды көру'
		sub_text_1.innerText 			= 'Сізде қалған күндер саны ' + sterm_;
		sub_text_3.innerText 			= 'Уақыт бітті';

		for (var i = 0; i < order_detail_button.length; i++) {
			order_detail_button[i].innerText = 'Толығырақ'; 
		}


	} else if (lang == 'ru') {
		update_picture_link.text 	= 'Изменть изоброжение';
		id_username.placeholder 	= 'Қолданушы атауы';
		id_first_name.placeholder 	= 'Имя';
		id_last_name.placeholder 	= 'Фамилия';
		id_email.placeholder 		= 'Почта';
		profile_save_id.innerText	= 'Сохранить';
		logout.text 				= 'Выйти';
		sub_sterm.innerText 		= 'Срок подписки'

	};
}; 
function language_all_orders(lang) {
	var all_orders_text = document.getElementById('all_orders_text');
	var orders_link = document.getElementsByClassName('order_btn');
	var order_date = document.getElementsByClassName('order_date');
	var order_sterm = document.getElementsByClassName('order_sterm');
	var id_message = document.getElementById('id_message');
	var send_btn = document.getElementById('send_btn');
	var close_btn = document.getElementById('close_btn'); 
	var feedback_title = document.getElementById('feedback_title'); 

	navigation_lang(lang)
	if (lang == 'kk') {
		all_orders_text.innerText = 'Барлық тапсырыстар';
		id_message.placeholder 	  = 'Сізде қандай мәселе туындады?';
		send_btn.innerText 		  = 'Жіберу';
		close_btn.innerText 	  = 'Жабу';
		feedback_title.innerText  = 'Сұрақтарыңыз барма?';
		for (var i = 0; i < orders_link.length; i++) {
			orders_link[i].innerText = 'Тапсырысты көру';
			order_date[i].innerText = 'Тапсырыс берілді ';
			order_sterm[i].innerText = 'Тапсырыс аяқталады ';
		}
	} else if (lang == 'ru') {
		all_orders_text.innerText = 'Все заказы'
		id_message.placeholder 	  = 'Опишите вашу проблему?';
		send_btn.innerText 		  = 'Отправить';
		close_btn.innerText 	  = 'Закрыть';
		feedback_title.innerText  = 'У вас вопросы?';
		for (var i = 0; i < orders_link.length; i++) {
			orders_link[i].innerText = 'Посмотреть заказ';
			order_date[i].innerText = 'Заказано в ';
			order_sterm[i].innerText = 'Актуально до ';
		}
	}

};