import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import Home from './pages/Home';


class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/404' component={NotFoundPage} />
                    <Redirect to='/404'/>
                </Switch>
            </Router>       
            )
    }
}

export default App;