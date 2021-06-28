import React from 'react';
import GlobalStyle from './components/helpers/GlobalStyle';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import About from './pages/about/About';
import Locations from './pages/locations/Locations';
import Contact from './pages/contact/Contact';
import WebDesign from './pages/web-design/WebDesign';
import AppDesign from './pages/app-design/AppDesign';
import GraphicDesign from './pages/graphic-design/GraphicDesign';
import Error from './components/error/Error';
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
