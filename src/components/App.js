import React, { useState, useContext } from 'react';
import { Header } from './Header';
import { LoginForm } from './Login';
import { ModalWindow } from './Modal';
import { SignupForm } from './SignupForm';
import { MainPage } from './MainPage';
import './styles/App.css';
import { Routes, Route, Link} from 'react-router-dom' 
import { UserProfile } from './UserProfile';

export const AppContext = React.createContext({});

const cards = [
  {
      executor: "Иван Иванов",
      city: "Москва",
      title: 'Стрижка гозона',
      description: 'Стригу газоны классно дешево',
      price: 2000,
      date: '19.01.22',
  },
  {
      executor: "Иван Иванов",
      city: "Москва",
      title: 'Стрижка мужская',
      description: 'Стригу волосы классно дешево',
      price: 2000,
      date: '19.01.22',
  },
  {
      executor: "Василий Пупкин",
      city: "Новосибирск",
      title: 'Уборка квартиры',
      description: 'Моем моем трубочиста чисто чисто',
      price: 3000,
      date: '19.01.22',
  },
  {
      executor: "Василий Пупкин",
      city: "Новосибирск",
      title: 'Уборка квартиры',
      description: 'Моем моем трубочиста чисто чисто',
      price: 3000,
      date: '19.01.22',
  },
  {
      executor: "Василий Пупкин",
      city: "Новосибирск",
      title: 'Уборка квартиры',
      description: 'Моем моем трубочиста чисто чисто',
      price: 3000,
      date: '19.01.22',
  },
]

function App() {
  const [text, setText] = useState('');
  const [city, setCity] = useState('');

  return (
    <AppContext.Provider value={{
      isLoggedin: true,
      cards,
      titleFilter: {text, onChange: (e) => {setText(e.target.value)}},
      cityFilter: {city, onClick: (string) => {setCity(string)}},
      dateFilter: ''}}>
      <div className="App">
        <Header/>
      </div>
      <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/profile/*" element={<UserProfile/>}/>
        </Routes>
    </AppContext.Provider>
  );
}

export default App;
