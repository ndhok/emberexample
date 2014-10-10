// creates object for ember application
var classObj = Ember.Application.create();


/* Map your links with router 
* Here Resource : A thing (Model)
* & route : Something to do with the thing
* resource may contain other routes, whereas route cannot
* this.resource automatically creates an index route when it sees you have sub-routes.
*/
classObj.Router.map(function(){
	this.resource('main-content',{path: '/'}, function(){});
	this.resource('showusers',{path: '/showusers'}, function(){});
	this.route('adduser',{path: '/adduser'}, function(){});
});

/* The Ember.Route class is used to define individual routes
*  this function helps to render the template.
*/
classObj.ShowusersRoute = Ember.Route.extend({
	model: function(){
		return ['Smith J','Jimmy Shay','Kelvin Joe'];
	}
});
