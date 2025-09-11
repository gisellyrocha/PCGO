import React from 'react';
import Video from './components/Video/Video';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import css from './styles/App.module.scss';
import Form from './components/Form/Form';
const App = () => {
  //don't forget to add font link in index.html
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Video />
      <Form />
      <Footer />
    </div>
  );
};

export default App;
