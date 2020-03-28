import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

// Components.
import Navbar from "./components/Navbar/Navbar";
import TodosRoute from "./components/TodosRoute/TodosRoute";
import ContactRoute from "./components/ContactRoute/ContactRoute";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar/>
                <Route exact path='/' component={TodosRoute} />
                <Route path='/contact' component={ContactRoute} />
            </BrowserRouter>
        )
    }
}

export default App;