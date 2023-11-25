import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Card from './Components/Card'
import Section from './Components/Section'
import { useEffect, useState } from 'react';
import axios from 'axios';


const ENDPOINT = 'https://qtify-backend-labs.crio.do/'

function App() {
  const [topAlbums, setTopAlbums] = useState([])
  const [newAlbums, setNewAlbums] = useState([])
  
  useEffect(() => {
    axios.get(`${ENDPOINT}albums/top`)
    .then(({data}) => {
      setTopAlbums(data)
    })
    axios.get(`${ENDPOINT}albums/new`)
    .then(({data}) => {
      setNewAlbums(data)
    })
  },[])
  return (
    <>
      <Navbar />
      <Hero />
      <Section title= 'Top Albums' data={topAlbums}/>
      <Section title= 'New Albums' data={newAlbums}/>
    
    </>
  );
}

export default App;
