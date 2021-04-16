import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Home />
            <Footer />
        </>
    );
}

export default App;
