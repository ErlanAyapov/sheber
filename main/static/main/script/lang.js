function language_select(lang) {
	var main 	= document.getElementById('main');
	var make 	= document.getElementById('make');
	var account = document.getElementById('account');
	var help	= document.getElementById('help');
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
	var premium_tarif_title		= document.getElementById('premium_tarif_title');
	if (lang == 'kk') {
		main.innerHTML = 'Басты';
		make.innerHTML = 'Тапсырыс';
		help.innerHTML = 'Көмек';
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
		get_order.innerHTML	   = 'Тапсырыс беру';


	};
};