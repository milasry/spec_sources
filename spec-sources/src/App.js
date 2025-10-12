import './App.css';
import styled from "styled-components";
import ListItem from "../src/components/listItem.js";
import { data as initialData } from "../src/data/mockdata";
import AddBox from "../src/components/addBox.js";
import logo from "../src/assets/logo.png";
import React, { useState, useEffect } from 'react';

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

const Background = styled.div`
  background-color: #F1F1F1;
  min-height: 100vh;
`

function App() {
  const [sources, setSources] = useState(initialData);

  const handleRemove = (removeIndex) => {
    setSources(sources.filter((_, index) => index !== removeIndex));
  };

  return (
    <Background>
      <Logo src={logo} alt="Spectator logo"/>
      <Main>
        <Title>Spectator's Sources</Title>
        <AddBox sources={sources} setSources={setSources} />
        {sources.map((item, index) => (
          <ListItem
            key={index}
            index={index}
            name={item.name}
            email={item.email}
            onRemove={handleRemove}
          />
        ))}
      </Main>
    </Background>
  );
}

export default App;
