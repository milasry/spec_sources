import './App.css';
import styled from "styled-components";
import ListItem from "./components/listItem.js";
import { data as initialData } from "./data/mockdata.js";
import AddBox from "./components/addBox.js";
import logo from "./images/logo.png";
import React, { useState, useEffect, useRef } from 'react';
import { attachColor, getRandomColor } from "./utils/colorPalette.js";

const Title = styled.h1`
  color: #36476D;
  text-align: center;
  font-size: 32px;
  font-family: 'Poppins', sans-serif;
`

const Main = styled.div`
  background-color: transparent;
  font-family: 'Poppins', sans-serif;
  color: #36476D;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const Logo = styled.img`
  width: 200px;
  margin-top: 40px;
  align-self: flex-start;
  margin-left: 40px;
`;

const Background = styled.div`
  background-color: ${({ $bg }) => $bg || '#F1F1F1'};
  min-height: 100vh;
  width: 100%;
  transition: background-color 3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const baseBg = '#F1F1F1';
  const [sources, setSources] = useState(() => initialData.map(attachColor));
  const [bgColor, setBgColor] = useState(baseBg);
  const timerRef = useRef([]);

  const handleRemove = (removeIndex) => {
    setSources(sources.filter((_, index) => index !== removeIndex));
  };

  const pulseBackground = () => {
    timerRef.current.forEach(clearTimeout);
    timerRef.current = [];
    setBgColor(getRandomColor());
    timerRef.current.push(setTimeout(() => setBgColor(getRandomColor()), 1200));
    timerRef.current.push(setTimeout(() => setBgColor(baseBg), 2700));
  };

  useEffect(() => () => timerRef.current.forEach(clearTimeout), []);

  return (
    <Background $bg={bgColor}>
      <Logo src={logo} alt="Spectator logo"/>
      <Main>
        <Title>Spectator's Sources</Title>
        <AddBox
          sources={sources}
          setSources={setSources}
          onAdded={pulseBackground}
        />
        {sources.map((item, index) => (
          <ListItem
            key={index}
            index={index}
            name={item.name}
            email={item.email}
            color={item.color}
            onRemove={() => handleRemove(index)}
          />
        ))}
      </Main>
    </Background>
  );
}

export default App;
