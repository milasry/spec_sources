import AddBox from '../components/addBox';
import ListItem from '../components/listItem';
import styled from 'styled-components';
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { attachColor, getRandomColor } from '../utils/colorPalette';

const HeaderText = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 50px;
  font-weight: 500;
  color: #36476D;
  text-align: center;
  font-weight: bold;
`;

const PageBackground = styled.div`
  background-color: ${({ $bg }) => $bg || '#F1F1F1'};
  min-height: 100vh;
  width: 100%;
  transition: background-color 3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;
`;

const HomePage = () => {

    const baseBg = '#F1F1F1';
    const [sources, setSources] = useState([]);
    const [backendMessage, setBackendMessage] = useState('');
    const [bgColor, setBgColor] = useState(baseBg);
    const timerRef = useRef([]);
 
    useEffect(() => {
      axios.get('http://localhost:8000/')
        .then((response) => {
          setBackendMessage(response.data.message);
          console.log(response.data.message);
        })
        .catch(err => console.error('Fetch error:', err));
    }, []);

    
    useEffect(() => {
        axios.get('http://localhost:8000/all')
          .then((response) => {
            setSources(response.data.map(attachColor));
          })
          .catch(err => console.error('Fetch error:', err));
      }, []);

    const pulseBackground = () => {
      timerRef.current.forEach(clearTimeout);
      timerRef.current = [];
      setBgColor(getRandomColor());
      timerRef.current.push(setTimeout(() => setBgColor(getRandomColor()), 1200));
      timerRef.current.push(setTimeout(() => setBgColor(baseBg), 3000));
    };

    useEffect(() => () => timerRef.current.forEach(clearTimeout), []);
  
    const handleAddSource = (newSource) => {
      const payload = { name: newSource.sourceName, email: newSource.sourceEmail };

      axios.post('http://localhost:8000/create', payload)
        .then(({ data }) => {
          setSources(prev => [...prev, attachColor({
            id: data.id,
            name: data.name,
            email: data.email
          })]);
        })
        .catch(err => console.error('Add error:', err));
    };
  
    const handleDelete = (idToDelete) => {
      setSources(prev => prev.filter(s => s.id !== idToDelete));
      axios.delete(`http://localhost:8000/delete/${idToDelete}`)
        .catch(err => {
          console.error('Delete error:', err);
        });
    };
  
    return (
      <PageBackground $bg={bgColor}>
        <p>{backendMessage}</p>
        <HeaderText>Spectator's Sources</HeaderText>
        <AddBox onSubmit={handleAddSource} onAdded={pulseBackground} />
        {sources.map((item, index) => (
          <ListItem
            key={item.id ?? index}
            index={index}
            name={item.name}
            email={item.email}
            color={item.color}
            onRemove={() => handleDelete(item.id ?? index)}
          />
        ))}
      </PageBackground>
    );
  };
   
export default HomePage;
