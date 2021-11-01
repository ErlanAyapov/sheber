from django.test import TestCase

# Create your tests here.
# {% if object_list %}
# 		<div class="news-conteainer">
# 			<h1>Новости</h1>
# 			{% for object in object_list %}
# 			<div class="news-block">
# 				{% if object.image %}
# 				<div class="image-block">
# 					<img src="{{ object.image.url }}" >
# 				</div>
# 				{% endif %}
# 				<div class="text-block">
# 					<div class="news-title"><strong>{{ object.title }}</strong></div><hr style="margin:10px 0;">
# 					<div class="news-body">{{ object.body }}</div>
# 					<div class="news-date">
# 						{{ object.date }}
# 					</div>
# 				</div>
				
# 			</div>
# 			{% endfor %}
# 		</div>
# 		{% else %}
# 			<h1 style="text-align:center">Пока нету новости :(</h1>
# 		{% endif %} 