import React, { useState, useContext } from 'react';
import { Header } from './Header';
import { LoginForm } from './Login';
import { ModalWindow } from './Modal';
import { SignupForm } from './SignupForm';
import { MainPage } from './MainPage';
import './styles/App.css';
import { Routes, Route, Link} from 'react-router-dom' 
import { UserProfile } from './UserProfile';
import { UserOrders } from './UserOrders';
import { UserServices } from './UserServices';
import { findAllByTestId } from '@testing-library/react';

export const AppContext = React.createContext({});

const cards = [
  {
      executor: "Иван Иванов",
      city: "Москва",
      title: 'Стрижка газона',
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
      date: '07.01.21',
  },
  {
    executor: "Иван Смирнов",
    city: "Томск",
    title: 'Мытье окон',
    description: 'Моем на высоте',
    price: 5000,
    date: '15.04.22',
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
  executor: "Иван Иванов",
  city: "Новосибирск",
  title: 'Уборка квартиры',
  description: 'Моем моем трубочиста чисто чисто',
  price: 3000,
  date: '19.01.22',
},
{
  executor: "Иван Иванов",
  city: "Новосибирск",
  title: 'Уборка квартиры',
  description: 'Моем моем трубочиста чисто чисто',
  price: 3000,
  date: '07.01.21',
},
{
executor: "Иван Смирнов",
city: "Томск",
title: 'Мытье окон',
description: 'Моем на высоте',
price: 5000,
date: '15.04.22',
},
]

const user = {
  firstName: 'Василий',
  middleName: 'Васильевич',
  lastName: 'Пупкин'
}

function App() {
  const [text, setText] = useState('');
  const [city, setCity] = useState('');

  return (
    <AppContext.Provider value={{
      isLoggedin: true,
      user,
      cards,
      titleFilter: {text, onChange: (e) => {setText(e.target.value)}},
      cityFilter: {city, onClick: (string) => {setCity(string)}},
      dateFilter: ''}}>
      <div className="App">
        <Header/>
      </div>
      <Routes>
          <Route path="/*" element={<MainPage/>}/>
          <Route path="/profile" element={<UserProfile/>}/>
          <Route path='/user_orders' element={<UserOrders/>}/>
          <Route path='/user_services' element={<UserServices/>}/>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
