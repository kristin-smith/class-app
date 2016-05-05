var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');

//Require the stylesheets on each .js file
require("../scss/style.scss");

var App = React.createClass({
	render : function(){
		return (
			<h1>Hollah!</h1>
		)
	}
});


ReactDOM.render(<App/>, document.getElementById('main'));