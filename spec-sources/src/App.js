import React from "react";
import './App.css';
import styled from "styled-components";
import ListItem from "../src/components/listItem.js";
import {data} from "../src/data/mockdata";

const Title = styled.h1`
  color: #36476D;
  text-align: center;
  font-size: 48px;
  font-family: 'Poppins', sans-serif;
`

const name = data[0].name
const email = data[0].email


function App() {
  return (
    <>
    <Title>Spectator's Sources</Title>
    <ListItem name={name} email={email}></ListItem>
    </>
  );
}

export default App;
