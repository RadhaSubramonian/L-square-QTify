import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Card from './Components/Card'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card 
        img="logo192.png"
        title="rahman"
        followers="100 follows"
      />
    </>
  );
}

export default App;
