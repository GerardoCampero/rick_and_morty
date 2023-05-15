import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/navBar';
import { useState } from 'react';

function App() {
   const [characters, setCharacter] = useState([]);
   const onSearch = (id) => {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
         if(data.name && !characters.find((char) => char.id === data.id )) {
            setCharacter((oldCharacters) => [...oldCharacters, data]);
         }
         else{
            window.alert('¡No hay personajes con este ID o está repetido!');
         }
      }
      );
   };
   const onClose = (id) => {
      setCharacter(characters.filter((char) => char.id !== id)) ;
   }
   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Cards characters={characters} onClose={onClose} />
         
      </div>
           

   );
}

export default App;
