import React from 'react';
//components
import List from '../../components/List';
import Footer from '../../components/Footer';
//Styles
import './Home.styles.css';

function Home() {
  return (
    <div className="home-container">
      <List />
      <Footer />
    </div>
  );
}

export default Home;
