import React from "react";
import styled from "styled-components";

const AddContainer = styled.p`
    height: 30px;
    width: 1000px;
    display: flex;
    justify-content: space-evenly;
    background: #AFD7FA;
    border-radius: 30px;
    border-width: 1px;
    border-color: black;
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
`

const Input = styled.input`
  border: None;
    width: 250px;
    height: 35px;
`

const AddBox = () => {
  return (
    <AddContainer>
    <Form>
        <Label htmlFor="name">Source name:</Label>
        <Input type="text" id="name"/>

        <Label htmlFor="email">Source email:</Label>
        <Input type="email" id="email"/>
    </Form>
    <AddButton>ADD</AddButton>
    </AddContainer>
  );
};

export default AddBox;
