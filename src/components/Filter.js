import React, { useState, useContext } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import axios from "axios";
import { AppContext }  from './App';

export const Filter = () => {
    const [ text, setText ] = useState('');
    const [ city, setCity ] = useState('');
    const [cityList, setCityList] = useState([]);
    const cityFilter = useContext(AppContext).cityFilter;

    const onInputChange = async (e) => {
        setText(e.target.value);
        if (e.target.value.length) {
          const result = await axios.get(`http://autocomplete.travelpayouts.com/places2?term=${e.target.value}&locale=ru&types[]=city`)
          .then(function (response) {
            console.log(response);
            setCityList(response.data.filter((el, i) => 
              el.country_code === 'RU' && i < 5))
          })
          .catch(function (error) {
            console.log(error);
          });
        } else {
          setCityList([]);
        }
    }

    return (
        <Dropdown autoClose="outside">
        <Dropdown.Toggle style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: '#68717A', border: '0', boxShadow: "none", padding: '0'}} variant="success" id="dropdown-basic">
          Фильтры
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
            <Dropdown.Header>По городу</Dropdown.Header>
            <Dropdown.Item role='search'>
                <input
                value={text}
                onChange={onInputChange}
                >
                </input>
            </Dropdown.Item>
            {cityList.length ? cityList.map((el, i) => (<Dropdown.Item key={i} name={el.name} onClick={(e) => cityFilter.onClick(e.target.name)}>{el.name}</Dropdown.Item>)): null}
        </Dropdown.Menu>
      </Dropdown>
    );
}