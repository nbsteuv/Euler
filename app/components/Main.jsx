var React = require('react');

var Main = (props) => {
  return (
    <div>
      <p>Main test</p>
      <div>
        <div>
          {props.children}
        </div>
      </div>
    </div>
   );
}

module.exports = Main;
