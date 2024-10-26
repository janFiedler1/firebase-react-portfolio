import logo from './logo.svg';
import './reset.css';
import './App.css';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Main from './components/MainComponent';

function App() {
  return (
    <div className="App">
      <canvas id="myCanvas" className='background-canvas'/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
