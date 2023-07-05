
import Navbar from './component/Navbar';
import pic1 from './assets/pic1.jpg'
import pic3 from './assets/pic3.jpg'
import pic2 from './assets/pic2.jpg'
import pic4 from './assets/pic4.jpg'
import pic5 from './assets/pic5.jpg'
import pic6 from './assets/pic6.jpg'
import pic7 from './assets/pic7.jpg'
import Connect from './component/Connect';


function App() {
  return (
    <div className="App">
       <Navbar />
       <img src={pic1} alt="" style={{width: "100%", marginBottom: "80px"}}/>
       <img src={pic3} alt="" style={{width: "100%"}}/>
       <img src={pic2} alt="" style={{width: "100%"}}/>
       <img src={pic4} alt="" style={{width: "100%"}}/>
       <img src={pic5} alt="" style={{width: "100%"}}/>
       <img src={pic6} alt="" style={{width: "100%"}}/>
       <Connect />
       <img src={pic7} alt="" style={{width: "100%"}}/>
    </div>
  );
}

export default App;
