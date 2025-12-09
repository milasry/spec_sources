import React, { useState } from "react";
import styled from "styled-components";
import { getRandomColor } from "../utils/colorPalette";

const AddContainer = styled.p`
    height: 30px;
    width: 1000px;
    display: flex;
    justify-content: space-evenly;
    background: #AFD7FA;
    border-radius: 30px;
    border-width: 1px;
    border-color: #000000;
    border-style: solid;
    color: white;
    padding: 30px;
    align-items: center;
    margin: 50px;
`

const AddButton = styled.button`
    background-color: #56C854;
    color: white;
    width: 120px;
    height: 40px;
    border-radius: 15px;
    font-size: 18px;
    font-weight: 600;
    border: None;
`

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;`

const Label = styled.label`
  font-size: 15px;
  font-weight: 500;
`

const Input = styled.input`
  border: None;
    width: 250px;
    height: 35px;
`

const AddBox = ({ sources = [], setSources, onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    if (onSubmit) {
      onSubmit({ sourceName: name, sourceEmail: email });
    } else if (setSources) {
      setSources(prev => [...prev, { name, email, color: getRandomColor() }]);
    }
    setName("");
    setEmail("");
  };

  return (
    <AddContainer>
      <Form onSubmit={submit}>
        <Label htmlFor="name">Source name:</Label>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Label htmlFor="email">Source email:</Label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <AddButton type="submit">ADD</AddButton>
      </Form>
    </AddContainer>
  );
};

export default AddBox;
