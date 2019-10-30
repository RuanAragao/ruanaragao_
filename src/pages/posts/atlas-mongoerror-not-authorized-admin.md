---
title: 'MongoError: not authorized on admin to execute command'
date: '2019-10-04'
thumb_img_path: images/post__mongo-error.jpg
content_img_path: images/post__mongo-error.jpg
excerpt: >-
  Bem, esse é um post rápido e direto com a função de documentar um erro que me fez gastar um bom tempo.
template: post
---

Bem, esse é um post rápido e direto com a função de documentar um erro que me fez gastar um bom tempo. 
Essa foi a primeira vez que tive esse problema. 

## Ambiente
NodeJs, Express e mongoose. Utilizando o serviço de banco de dados da mongoDB, o [Atlas](https://cloud.mongodb.com), com plano free.

## O erro

`UnhandledPromiseRejectionWarning: MongoError: not authorized on admin to execute command`

Tinha muito mais informações, mas que são irrelevantes.

## A busca da solução

Minha conexão estava da seguinte forma (como copiado no Atlas):

{% highlight js %}
mongoose.connect('mongodb+srv://meuusuario:minhasenha@cluster0-xxxxx.mongodb.net/admin?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
{% endhighlight %}

Rodei o Atlas inteiro alterando as configurações de permissão, quase cadastrei outra conta para dar acesso. 
Mas eu sempre fazia da mesma forma, por qual motivo esse apenas estava com esse bendito problema?
Lembrei de acessar um projeto que estava funcionando com Atlas, comparando a conexão minuciosamente até que vi: 

O projeto funcional estava: `...xxx.mongodb.net/test?ret...`

O projeto atual estava: `...xxx.mongodb.net/admin?ret...`

Então deu o estalo, o bendido "admin".

## A solução

Então, alterei a bendita rota:

{% highlight js %}
mongoose.connect('mongodb+srv://meuusuario:minhasenha@cluster0-xxxxx.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
{% endhighlight %}

Tentei novamente realizar o store e funcionou! Hahaha -.-'


