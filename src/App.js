import React from 'react';
import './App.css';
import Header from './components/Header';
import Results from './components/Results';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header title='******Employee Directory******'/> <br/><br/>
      <Results />
      <Footer />
    </div>
  );
}

export default App;
