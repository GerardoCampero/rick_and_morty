import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/navBar';
import About from './views/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import { useEffect, useState } from 'react';
import Favorites from './components/Favorites/Favorites';
import axios from "axios";




function App() {

   const { pathname } = useLocation();
   const [characters, setCharacter] = useState([]);
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();

   async function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      
      try {
         const { data } = await axios(URL + `?email=${email}&password=${password}`);
         const { access } = data;
         setAccess(access);
         access && navigate('/cards');
      } catch ({ response }) {
         const { data } = response;
         alert(data.message);
      }
      
      
      // axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      //    const { access } = data;
      //    setAccess(access);
      //    access && navigate('/cards');
      // });
   }
   
   useEffect(()=> {
      !access && navigate('/');
   }, [access]);
   
   const onSearch = async (id) => {

      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)

            if(data.name && !characters.find((char) => char.id === data.id )) {
                setCharacter((oldCharacters) => [...oldCharacters, data]);
             }
             else{
                window.alert(`La carta ${id} ya se encuentra seleccionada`);
             }
      } catch (error) {
         alert(error.response.data);
      }
      
      // .then((res) => res.json())
      // .then((data) => {
      //    if(data.name && !characters.find((char) => char.id === data.id )) {
      //       setCharacter((oldCharacters) => [...oldCharacters, data]);
      //    }
      //    else{
      //       window.alert('¡No hay personajes con este ID o está repetido!');
      //    }
      // }
      // );
   };
   const onClose = (id) => {
      setCharacter(characters.filter((char) => char.id !== id)) ;
   }
   return (
      <div className='App'>
         { pathname !== '/' && <Nav onSearch={onSearch} />}
         
         <Routes>
            <Route path='/Cards' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>} />
            <Route path='/favorite' element={<Favorites/>} />
            <Route path='/' element={<Form login={login}/>} />
         </Routes>
      </div>
           

   );
}

export default App;
