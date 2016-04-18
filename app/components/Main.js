var React = require('react');
var Banner = require("./Banner");
var styles = require("../styles/index")

var Main = React.createClass({
  render: function () {
    return (
      <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        <Banner />
      </div>
    )
  }
});

module.exports = Main;
