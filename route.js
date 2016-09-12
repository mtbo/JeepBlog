// set up the iron router

Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

// homepage setup
Router.route('/', function(){
	this.render("navbar", {to:"header"});
	this.render("welcome", {to:"main"});
});

Router.route('/blog', function(){
	this.render("navbar", {to:"header"});
	this.render("blog", {to:"main"});
});

Router.route('/willys', function(){
	this.render("navbar", {to:"header"});
	this.render("willys", {to:"main"});
});
