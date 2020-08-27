import React, { Component } from "react";
import Navbar from "./components/navbar";
import Banner from "./pages/banner";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <About></About>
        <Portfolio></Portfolio>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
