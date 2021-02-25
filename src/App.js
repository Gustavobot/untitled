
import './App.css';
import FormComponent from "./form";
import TemplateComponent from "./template";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import Routers from "./template/router";

function App() {

    return (
        <Router>
            <div>
                <Switch>
                    {Routers.map((item, index) => {
                        if(item.path == '/')
                            return (
                                <Route exact path={item.path} key={index}>
                                    <TemplateComponent content={item.component} />
                                </Route>
                            )
                        return (
                            <Route path={item.path} key={index}>
                                <TemplateComponent content={item.component} />
                            </Route>)
               })}
                </Switch>
            </div>
        </Router>
    );

}

export default App;
