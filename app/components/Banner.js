var React = require('react');
var styles = require("../styles/index")

var Banner = React.createClass({
  render: function () {
    return (
    <div className="col-sm-12">
      <h1>Always Sunny Trivia</h1>
      <div className="col-sm-12" style={styles.content}>
        <img className="img-responsive center-block" src="/app/images/sunny-city.jpg" alt='sunny-in-space-banner'></img>
      </div>
    </div>
    )
  }
});

module.exports = Banner;
