/* 
  SignIn
  This will let us make <SignIn/>
*/

var React = require('react');

var SignIn = React.createClass({
	render : function(){
		return <div>
            <form>
            <label name="username" title="username">Username: </label>
            <input type="text"></input>
            <label name="password" title="password">Password: </label>
            <input type="text"></input>
            <input type="submit" name="submit"></input>
            </form>
		</div>
	}
});

module.exports = SignIn;