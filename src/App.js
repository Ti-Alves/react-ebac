// import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header';
import Searchbar from './components/Searchbar/Searchbar';
import Library from './components/Library/Library';
import Footer from './components/Footer/Footer';
import { Wrapper } from './components/Style/Style';

function App() {
  return (
    <Wrapper>
      <Header />
      <Searchbar />
      <Library />
      <Footer />
    </Wrapper>
  );
}

export default App;
