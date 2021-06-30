import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navigation } from './components/navigation';
import { About } from './pages/about';
import { Map as MapPage } from './pages/map';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div className="App">
            <Router>
                <Navigation />

                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <MapPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
