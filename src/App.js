import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Locations from './components/Locations';
import Contact from './components/Contact';
import WebDesign from './components/WebDesign';
import AppDesign from './components/AppDesign';
import GraphicDesign from './components/GraphicDesign';
import Error from './components/Error';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Header />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/about'>
                    <About />
                </Route>
                <Route exact path='/locations'>
                    <Locations />
                </Route>
                <Route exact path='/contact'>
                    <Contact />
                </Route>
                <Route exact path='/web-design'>
                    <WebDesign />
                </Route>
                <Route exact path='/app-design'>
                    <AppDesign />
                </Route>
                <Route exact path='/graphic-design'>
                    <GraphicDesign />
                </Route>
                <Route exact path='/*'>
                    <Error />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
