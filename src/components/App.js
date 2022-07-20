import React, { useState } from 'react';
import { Header } from './Header';
import { MainPage } from './MainPage';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom' 
import { UserProfile } from './UserProfile';
import { UserOrders } from './UserOrders';
import { UserServices } from './UserServices';

export const AppContext = React.createContext({});

const cards = [
  {
      executor: "Иван Иванов",
      city: "Москва",
      title: 'Стрижка газона',
      description: 'Стригу газоны классно дешево',
      price: 2000,
      date: new Date(2022, 0, 19),
  },
  {
      executor: "Иван Иванов",
      city: "Москва",
      title: 'Стрижка мужская',
      description: 'Стригу волосы классно дешево',
      price: 2000,
      date: new Date(2022, 0, 19),
  },
  {
      executor: "Василий Пупкин",
      city: "Новосибирск",
      title: 'Уборка квартиры',
      description: 'Моем моем трубочиста чисто чисто',
      price: 3000,
      date: new Date(2022, 0, 19),
  },
  {
      executor: "Василий Пупкин",
      city: "Новосибирск",
      title: 'Уборка квартиры',
      description: 'Моем моем трубочиста чисто чисто',
      price: 3000,
      date: new Date(2022, 0, 19),
  },
  {
      executor: "Василий Пупкин",
      city: "Новосибирск",
      title: 'Уборка квартиры',
      description: 'Моем моем трубочиста чисто чисто',
      price: 3000,
      date: new Date(2021, 5, 7),
  },
  {
    executor: "Иван Смирнов",
    city: "Томск",
    title: 'Мытье окон',
    description: 'Моем на высоте',
    price: 5000,
    date: new Date(2019, 4, 1),
},
{
  executor: "Иван Иванов",
  city: "Москва",
  title: 'Стрижка мужская',
  description: 'Стригу волосы классно дешево',
  price: 2000,
  date: new Date(2022, 0, 19),
},
{
  executor: "Василий Пупкин",
  city: "Новосибирск",
  title: 'Уборка квартиры',
  description: 'Моем моем трубочиста чисто чисто',
  price: 3000,
  date: new Date(2022, 0, 19),
},
{
  executor: "Иван Иванов",
  city: "Новосибирск",
  title: 'Уборка квартиры',
  description: 'Моем моем трубочиста чисто чисто',
  price: 3000,
  date: new Date(2022, 0, 19),
},
{
  executor: "Иван Иванов",
  city: "Новосибирск",
  title: 'Уборка квартиры',
  description: 'Моем моем трубочиста чисто чисто',
  price: 3000,
  date: new Date(2022, 0, 19),
},
{
executor: "Иван Смирнов",
city: "Томск",
title: 'Мытье окон',
description: 'Моем на высоте',
price: 5000,
date: new Date(2022, 0, 19),
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
  const [activeDateFilter, setActiveDateateFilter] = useState('new first');

  return (
    <AppContext.Provider value={{
      isLoggedin: true,
      user,
      cards,
      titleFilter: {text, onChange: (e) => {setText(e.target.value)}},
      cityFilter: {city, onClick: (string) => {setCity(string)}},
      dateFilter: {activeDateFilter, onClick: (e) => {setActiveDateateFilter(e.target.name); console.log(activeDateFilter)}}}}>
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
