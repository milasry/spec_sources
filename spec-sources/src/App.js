import './App.css';
import styled from "styled-components";
import ListItem from "../src/components/listItem.js";
import {data} from "../src/data/mockdata";
import AddBox from "../src/components/addBox.js";
import logo from "../src/assets/logo.png";
import React, { useState } from 'react';

const Title = styled.h1`
  color: #36476D;
  text-align: center;
  font-size: 32px;
  font-family: 'Poppins', sans-serif;
`

const Main = styled.div`
  background-color: #F1F1F1;
  font-family: 'Poppins', sans-serif;
  color: #36476D;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Logo = styled.img`
    width: 200px;
    margin-top: 40px;
    margin-left: 65px;
`

const name = data[0].name
const email = data[0].email

const Background = styled.div`
  background-color: #F1F1F1;
  min-height: 100vh;
`

function App() {
  return (
    <Background>
      <Logo src={logo} alt="Spectator logo"/>
      <Main>
        <Title>Spectator's Sources</Title>
        <AddBox />
        {data.map((item, index) => (
          <ListItem key={index} index={index} name={item.name} email={item.email}/>
        ))}
      </Main>
    </Background>
  );
}

export default App;
