import './App.css';
import Header from './Components/Header/Header.js'
import Footer from './Components/Footer/Footer';
import Images from './Components/Image/Image';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Images/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
