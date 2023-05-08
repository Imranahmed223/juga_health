import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Carousil from './Components/Carousil';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import ContactUs from './Components/ContactUs';
import Meet from './Components/Meet';
import Quote from './Components/Quote';

function App() {
  return (
    <div>
        <Navbar/>
        <Carousil/>
        <AboutUs/>
        <Services/>
        <Meet/>
        <Quote/>
        <ContactUs/>
    </div>
  );
}

export default App;
