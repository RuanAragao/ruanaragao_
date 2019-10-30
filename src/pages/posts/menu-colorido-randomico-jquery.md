---
title: Menu colorido (pseudo) randômico com jQuery.
date: '2016-10-4'
thumb_img_path: images/post__collor-menu.jpg
content_img_path: images/post__collor-menu.jpg
excerpt: >-
  Bem, há algum tempo atrás procurei por um cliente Spotify para usar no Fedora, não consegui fazer funcionar (e nem cuidei em arrumar isso -.-), esqueci por uns tempos e lembrei novamente hoje por acaso.
template: post
---

Só para compartilhar mesmo.

HTML
{% highlight html %}
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Menu border color</title>
</head>
<body>
<script src="https://code.jquery.com/jquery-1.9.1.js"></script>
  <ul class="menu-categ">
    <li>
      <a href="#">aaaaa</a>
    </li>
    <li>
      <a href="#">bbbbb</a>
    </li>
    <li>
      <a href="#">ccccc</a>
    </li>
    <li>
      <a href="#">ddddd</a>
    </li>
    <li>
      <a href="#">eeeee</a>
    </li>
    <li>
      <a href="#">fffff</a>
    </li>
    <li>
      <a href="#">ggggg</a>
    </li>
    <li>
      <a href="#">hhhhh</a>
    </li>
    <li>
      <a href="#">iiiii</a>
    </li>
  </ul>
</body>
</html>
{% endhighlight %}


CSS
{% highlight css %}
.menu-categ {
  background-color: #fff;
  width: 120px;
}
.menu-categ {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.menu-categ li a {
  border-left: 3px solid #ccc;
  color: #333;
  display: block;
  text-decoration: none;
  padding-left: .3em;
}
.menu-categ li a:hover,
.menu-categ li a:focus {
  background-color: #16a085;
  box-shadow: 0 3px 3px #ccc;
  border-color: #16a085 !important;
  color: #fff !important;
}
{% endhighlight %}

Javascript
{% highlight js %}
var colors = ['#1dd2af', '#3498db', '#9b59b6', '#f1c40f', '#2ecc71', '#e67e22', '#e74c3c'];
var n_itens = $('.menu-categ li a').length;

function color(color_list) {
  return color_list[Math.floor(Math.random() * color_list.length)];
}

function set_colors(list_colors) {
  for(var i = 0; i <= n_itens; i++) {
    var color_now = color(list_colors);
    $('.menu-categ li a:eq('+ i +')').css('border-color', color_now);
    $('.menu-categ li a:eq('+ i +')').css('color', color_now);
    $('.menu-categ li a:eq('+ i +')').html(color_now);
  }
}

$(document).ready(function(e) {
  set_colors(colors);
});
{% endhighlight %}

Resultado
<a class="jsbin-embed" href="http://jsbin.com/mevowahija/4/embed?live">JS Bin demo</a><script src="http://static.jsbin.com/js/embed.js"></script>

Até mais! :P
