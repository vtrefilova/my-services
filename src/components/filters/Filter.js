import React, { useState, useContext } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import axios from "axios";
import { AppContext }  from '../../contexts/context.js';
import styled from "styled-components";
import img from '/Users/valeriatrefilova/Study/shift-22-front/src/images/icons8-search.svg';
import Form from 'react-bootstrap/Form';

export const Filter = () => {
    const [ text, setText ] = useState('');
    const [cityList, setCityList] = useState([]);
    const cityFilter = useContext(AppContext).cityFilter;
    const dateFilter = useContext(AppContext).dateFilter;

    const onInputChange = async (e) => {
        setText(e.target.value);
        if (e.target.value.length) {
          const result = await axios.get(`http://autocomplete.travelpayouts.com/places2?term=${e.target.value}&locale=ru&types[]=city`)
          .then(function (response) {
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
        <Dropdown.Toggle style={toggleStyles} variant="success" id="dropdown-basic">
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
            <Dropdown.Divider />
            <Dropdown.Header>По дате</Dropdown.Header>
            <CustomRadioButton
              reverse="true"
              label="Сначала новые"
              name="new first"
              type='radio'
              checked={dateFilter.activeDateFilter === 'new first' ? 'checked' : ''}
              id='0'
              onChange={dateFilter.onClick}
            />
            <CustomRadioButton
              reverse="true"
              label="Сначала старые"
              type='radio'
              checked={dateFilter.activeDateFilter === 'old first' ? 'checked' : ''}
              name="old first"
              id='1'
              onChange={dateFilter.onClick}
            />
        </Dropdown.Menu>
      </Dropdown>
    );
}

const toggleStyles = {
  backgroundColor: 'rgba(0, 0, 0, 0)',
  color: '#68717A',
  border: '0',
  boxShadow: 'none',
  padding: '0',
}

const CustomDropdownItem = styled(Dropdown.Item)`
  &:active {
    background-color: #FFFFFF;
    color: black;
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
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: 40% 40%;
  background-position: -17px;
  &:focus {
    border-color:#7749F8;
  }
  &::-webkit-input-placeholder {
    color: #ABB5BE;
  }
`

const CustomRadioButton = styled(Form.Check)`
  margin-left: 16px;
  & > input:checked {
    background-color: #7749F8;
    border-color: #7749F8;
    box-shadow: 0 0 0 4px #EBE5FC;
  }
  & > input:active {
    box-shadow: 0 0 0 4px #EBE5FC;
    border-color: #7749F8;
  }
`