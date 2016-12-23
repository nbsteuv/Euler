var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function(){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
         <ul className="menu">
           <li className="menu-text">Project Euler Code Bank</li>
           <li>
             <IndexLink to="/" activeClassName="active-link">Exercises</IndexLink>
           </li>
         </ul>
       </div>
       <div className="top-bar-right">
           <ul className="menu">
             <li className="menu-text">
               Created by <a href="https://github.com/nbsteuv/Euler" target="_blank">Nick Steuver</a>
             </li>
           </ul>
       </div>
     </div>
    )
  }
});

module.exports = Nav;
