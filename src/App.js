import logo from './logo.svg';
import './reset.css';
import './App.css';
import { useState } from 'react';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Main from './components/MainComponent';
import Home from './components/HomeComponent';
import Solutions from './components/SolutionsComponent';
import Portfolio from './components/PortfolioComponent'
import Contact from './components/ContactComponent';
import {Routes, Route} from 'react-router-dom'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

function App() {
  const navLinks = [
    {id:1, name:'Home', url:'/', component: <Home/>},
    {id:2, name:'Solutions', url:'/solutions', component: <span>Solutions</span>},
    {id:3, name:'Portfolio', url:'./portfolio', component: <span>Portfolio</span>},
    {id:4, name:'Contact', url:'./contact', component: <span>Contact</span>}
  ]
  const [content, setContent] = useState(<Main/>)
  const changeContent = (newContent) => {
    setContent(newContent);
  }
  const router = createBrowserRouter([
    { 
      path: '/',
      element: <Main/>,
      errorElement: <span>404 Not Found</span>
    },
    { 
      path: '/solutions',
      element: <Solutions/>
    },
    { 
      path: '/portfolio',
      element: <Portfolio/>
    },
    { 
      path: '/contact',
      element: <Contact/>
    },
  ]);



  return (
    <div className="App">
      <canvas id="myCanvas" className='background-canvas'/>
      <Header navLinks={navLinks} changeContent={changeContent} router={router}/>
      {/* <Main content={content}/> */}
        <RouterProvider router={router}/>
          {/* {navLinks.map((link) => (
            <Route path={link.url} name={link.name}/>
          ))} */}
      <Footer/>
    </div>
  );
}

export default App;
