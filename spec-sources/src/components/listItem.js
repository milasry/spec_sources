import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: #36476D;
  text-align: center;
  font-size: 40px;
  font-family: 'Poppins', sans-serif;
`

const ListItem = ({name, email}) => {
  return (
    <Title>{name} {email}</Title>
  );
};

export default ListItem;
