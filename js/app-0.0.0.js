//(function(){
//'use strict';

$(document).ready(function(){
	app.c.init();
	app.v.init();
	});

/////////////////////////////////////////////////////// app

var app={m:{},v:{},c:{}};


/////////////////////////////////////////////////////// model objects

app.m.offset={};
app.m.links=[];

/////////////////////////////////////////////////////// controller methods

app.c.init=function(){
	var link=app.c.addLink;
	link("iconic","iconic/index.html");
	link("utopias","utopias/index.html");
	link("ecosystem","druid01/index.html");
	link("evolving trees","druid02/index.html");
	link("galapagos","galapagos/index.html");
};

app.c.setOffset=function(side,n){
	app.m.offset[side]=n;
}

app.c.addLink=function(text,url){
	var link={};
	var baseUrl="http://peopleofthebit.com/dev/";
	link.text=text;
	link.url=baseUrl+url;
	link.html="<a href='"+link.url+"' >"+link.text+"</a>";
	app.m.links.push(link);
}

/////////////////////////////////////////////////////// view methods

app.v.init=function(){
	$("p#links").html(_.pluck(app.m.links,"html").join(" | "));
};

//}());
