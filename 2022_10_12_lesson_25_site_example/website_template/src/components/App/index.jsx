import '../../style.css'
import Navbar from '../Navbar';
import Services from '../Services';
import AboutUs from '../AboutUs';
import Contacts from '../Contacts';
import Footer from '../Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Services />
      <AboutUs />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
