import React from "react";
import styled from "styled-components";

const SourceNumber = styled.p`
  font-weight: 600;
  font-style: SemiBold;
  font-size: 25px;
`

const SourceName = styled.p`
  color: #36476D;
  font-weight: 600;
  font-style: SemiBold;
  font-size: 20px;
`

const SourceEmail = styled.p`
  font-weight: 400;
  font-style: Regular;
  font-size: 20px;
  color: #828EA6;
`

const ItemBox = styled.div`
    display: flex;
    justify-content: space-between;
    background: white;
    border-radius: 25px;
    color: #36476D;
    padding: 50px;
    width: 920px;
    height: 20px;
    padding-top: 25px;
    padding-right: 50px;
    padding-bottom: 25px;
    padding-left: 50px;
    gap: 121px;
    margin: 10px;
    align-items: center;
    box-shadow: 0px 4px 4px #b2b3b7;
`

const DeleteButton = styled.button`
    background-color: #FF7676;
    color: white;
    width: 120px;
    height: 40px;
    border-radius: 15px;
    font-size: 18px;
    font-weight: 600;
    border: None;
`

const ListItem = ({name, email, index}) => {
  return (
    <ItemBox>
    <SourceNumber>{index + 1}</SourceNumber>
    <SourceName>{name}</SourceName>
    <SourceEmail>{email}</SourceEmail>
    <DeleteButton>DELETE</DeleteButton>
    </ItemBox>
  );
};

export default ListItem;
