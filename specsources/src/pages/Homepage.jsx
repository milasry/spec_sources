import AddBox from '../components/addBox';
import ListItem from '../components/listItem';
import styled from 'styled-components';
import React, { useState } from 'react';
import axios from 'axios';
import { attachColor } from '../utils/colorPalette';

const HeaderText = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 50px;
  font-weight: 500;
  color: #36476D;
  text-align: center;
  font-weight: bold;
`;

const HomePage = () => {

    const [sources, setSources] = useState([]);
    const [backendMessage, setBackendMessage] = useState('');
 
    React.useEffect(() => {
      axios.get('http://localhost:8000/')
        .then((response) => {
          setBackendMessage(response.data.message);
          console.log(response.data.message);
        })
        .catch(err => console.error('Fetch error:', err));
    }, []);

    
    React.useEffect(() => {
        axios.get('http://localhost:8000/all')
          .then((response) => {
            setSources(response.data.map(attachColor));
          })
          .catch(err => console.error('Fetch error:', err));
      }, []);
  
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
      <div>
        <p>{backendMessage}</p>
        <HeaderText>Spectator's Sources</HeaderText>
        <AddBox onSubmit={handleAddSource} />
        {sources.map((item, index) => (
          <Lis