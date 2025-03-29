import React from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import Home from '../../components/Home/Home';
import About from '../../components/About/About';
import Photo from '../../components/Photo/Photo';
import Contact from '../../components/Contact/Contact';
import Nomatch from '../../components/Nomatch';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/photo" element={<Photo />} />
          <Route exact path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<Nomatch />} />
      </Routes>
      <Footer />

    </>

  );
}

export default App;
