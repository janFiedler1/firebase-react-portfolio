import logo from './logo.svg';
import './reset.css';
import './App.css';
import { useState } from 'react';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Main from './components/MainComponent';
import Home from './components/HomeComponent';

function App() {
  const navLinks = [
    {id:1, name:'Home', url:'./', component: <Home/>},
    {id:2, name:'Solutions', url:'./', component: <span>Solutions</span>},
    {id:3, name:'Portfolio', url:'./', component: <span>Portfolio</span>},
    {id:4, name:'Contact', url:'./', component: <span>Contact</span>}
  ]
  const [content, setContent] = useState(<Main/>)
  const changeContent = (newContent) => {
    setContent(newContent);
  }
  return (
    <div className="App">
      <canvas id="myCanvas" className='background-canvas'/>
      <Header navLinks={navLinks} changeContent={changeContent}/>
      <Main content={content}/>
      <Footer/>
    </div>
  );
}

export default App;
