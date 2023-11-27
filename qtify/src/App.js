import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Card from './Components/Card'
import Section from './Components/Section'
import { useEffect, useState } from 'react';
import axios from 'axios';
import FilterSection from './Components/FilterSection';
import Accordion from './Components/Accordion';


const ENDPOINT = 'https://qtify-backend-labs.crio.do/'

function App() {
  const [topAlbums, setTopAlbums] = useState([])
  const [newAlbums, setNewAlbums] = useState([])
  const [songs, setSongs] = useState([])
  const [filteredSongs, setFilteredSongs] = useState([])
  const [genres, setGenre] = useState([])
  
  useEffect(() => {
    axios.get(`${ENDPOINT}albums/top`)
    .then(({data}) => {
      setTopAlbums(data)
    })
    axios.get(`${ENDPOINT}albums/new`)
    .then(({data}) => {
      setNewAlbums(data)
    })
    axios.get(`${ENDPOINT}/songs`)
    .then(({data}) => {
      setSongs(data)
      console.log("filtered data",data)
      setFilteredSongs(data)
    })
    axios.get(`${ENDPOINT}/genres`)
    .then(({data}) => {
      setGenre([{"key":"all","label":"All"},...data.data])
    })
  },[])
  return (
    <>
      <Navbar data={topAlbums}/>
      <Hero />
      <Section title= 'Top Albums' data={topAlbums}/>
      <Section title= 'New Albums' data={newAlbums}/>
      <FilterSection title= 'Songs' data={filteredSongs} filters={genres}
      executeFilter = {(genre)=>{
        if(genre === 'all'){
          setFilteredSongs(songs)
        }
        else{
          setFilteredSongs(songs.filter(song => song.genre.key === genre))
        }
      }}
      />
      <Accordion />
      
    </>
  );
}

export default App;
