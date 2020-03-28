import React from "react";
// Difference between Link and Navlink is that Navlink is adding additional class to active link.
// Additional information are passed via props to component which match path.
import {Link, NavLink, withRouter} from "react-router-dom";

function Navbar(props) {
    // props.history.push is available only for components rendered via Link or Navlink.
    // Navbar component is wrapped by withRouter higher order component on bottom and has tis method available in props.

    // setTimeout(() => {
    //     props.history.push('/')
    // }, 5000);

    return(
        <div>
            <ul>
                <li><Link to="/">ToDoList</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}

// withRouter is 'higher order component' which allow Navbar component to use additional functions available via props.
export default withRouter(Navbar);