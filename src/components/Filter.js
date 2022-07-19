import React, { useState, useContext } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import axios from "axios";
import { AppContext }  from './App';
import styles from  './styles/Filter.module.css';
import styled from "styled-components";

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
            <CustomDropdownItem role='search'>
                <CustomInput
                value={text}
                onChange={onInputChange}
                placeholder='Поиск'
                >
                </CustomInput>
            </CustomDropdownItem>
            {cityList.length ? cityList.map((el, i) => (<OtherCustomDropdownItem key={i} name={el.name} onClick={(e) => cityFilter.onClick(e.target.name)}>{el.name}</OtherCustomDropdownItem>)): null}
        </Dropdown.Menu>
      </Dropdown>
    );
}

const CustomDropdownItem = styled(Dropdown.Item)`
  &:active {
    background-color: #FFFFFF;
  }
  &:hover {
    background-color: #FFFFFF;
  }
`
const OtherCustomDropdownItem = styled(Dropdown.Item)`
  &:active {
    background-color: #7749F8;
    color: black;
  }
  &:hover {
    background-color: #F8F9FA;
  }
`

const CustomInput = styled.input`
  outline: none;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 30px;
  background: #FFFFFF;
  border: 1px solid #DEE2E6;
  border-radius: 4px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #ABB5BE;
  background-image: url(/Users/valeriatrefilova/Study/shift-22-front/src/components/images/icons8-search.svg);
  background-repeat: no-repeat;
  background-size: 40% 40%;
  background-position: -17px;
  &:focus {
    border-color:#7749F8;
  }
  &:-webkit-input-placeholder {
    color: #ABB5BE;
  }

`