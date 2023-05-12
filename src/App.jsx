import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import './App.css'
import Companies from "./Components/Companies/Companies";
import Residencies from "./Components/Residencies/Residencies";
import Value from "./Value/Value";
import Contactus from "./Components/Contactus/Contacts";
import GetStarted from "./Components/GetStarted/GetStarted";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <div>
          
          <div className="white-gradient" />
           <Header />
            <Hero />
      </div>
      <Companies/>
      <Residencies/>
<Value/>
<Contactus/>
<GetStarted/>
<Footer/>
    </div>
  );
}

export default App;
