var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');

//Import components
var SignIn = require('./components/SignIn');
var SignUp = require('./components/SignUp');

//Require the stylesheets on each .js file
//require('../scss/style.scss');

var App = React.createClass({
	render : function(){
		return (
			<h1>Hollah!</h1>
			
		)
	}
});


ReactDOM.render(<App/>, document.getElementById('main'));
ReactDOM.render(<SignIn/>,  document.getElementById('signIn'));
