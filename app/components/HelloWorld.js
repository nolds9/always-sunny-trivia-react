var React = require('react');

var HelloWorld = React.createClass({
  render: function () {
    return (
      <div> Jello World! </div>
    )
  }
});

module.exports = HelloWorld;

// or as a stateless functional componnet

// function HelloWorld () {
//   return (<div>Jello World!!!!!!!!</div>)
// }
