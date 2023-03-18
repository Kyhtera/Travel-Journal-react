
import './App.css';
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"



function App() {
  return (
    <div className="App">
      <Navbar />
      {data.map(cardData => (
        <Card data={cardData} />


      ))}
      <div className='footer'>Designed by Kyhtera</div>
    </div>




  )
}

export default App;


