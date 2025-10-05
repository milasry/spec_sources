import React from "react";
import './App.css';
import styled from "styled-components";
import ListItem from "../src/components/listItem.js";
import {data} from "../src/data/mockdata";
import AddBox from "../src/components/addBox.js";
import logo from "../src/assets/logo.png";

const Title = styled.h1`
  color: #36476D;
  text-align: center;
  font-size: 35px;
  font-family: 'Poppins', sans-serif;
`

const Main = styled.body`
    background-color: #F1F1F1;
    font-family: 'Poppins', sans-serif;
    color: #36476D;
    justify-items: center;
`

const Logo = styled.img`
    width: 200px;
    margin-top: 30px;
`


const name = data[0].name
const email = data[0].email


function App() {
  return (
    <>
    <Logo src={logo} alt="Spectator logo"/>
    <Main>
    <Title>Spectator's Sources</Title>
    <AddBox></AddBox>
    {data.map((item, index) => (
      <ListItem key={index} index={index} name={item.name} email={item.email}/>
      ))}
    </Main>
    </>
  );
}

export default App;
