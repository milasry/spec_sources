import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { getRandomColor } from "../utils/colorPalette";

const AddContainer = styled.div`
  position: relative;
  overflow: hidden;
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
`;

const AddButton = styled.button`
  background-color: #56C854;
  color: white;
  width: 120px;
  height: 40px;
  border-radius: 15px;
  font-size: 18px;
  font-weight: 600;
  border: none;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Label = styled.label`
  font-size: 15px;
  font-weight: 500;
`;

const Input = styled.input`
  border: none;
  width: 250px;
  height: 35px;
`;

const fall = keyframes`
  0% { transform: translate3d(0, 0, 0) rotate(0deg); opacity: 1; }
  100% { transform: translate3d(0, 180px, 0) rotate(240deg); opacity: 0; }
`;

const ConfettiLayer = styled.div`
  pointer-events: none;
  position: absolute;
  inset: 0;
  overflow: hidden;
`;

const ConfettiPiece = styled.div`
  position: absolute;
  width: 8px;
  height: 12px;
  background: ${({ $color }) => $color};
  left: ${({ $left }) => $left}%;
  animation: ${fall} ${({ $duration }) => $duration}ms ease-out;
  animation-delay: ${({ $delay }) => $delay}ms;
  opacity: 0.9;
`;

const AddBox = ({ sources = [], setSources, onSubmit, onAdded }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confettiPieces, setConfettiPieces] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);

  const triggerConfetti = () => {
    const pieces = Array.from({ length: 70 }, () => ({
      left: Math.random() * 100,
      color: getRandomColor(),
      duration: 1400 + Math.random() * 1000,
      delay: Math.random() * 120
    }));
    setConfettiPieces(pieces);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2500);
  };

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    if (onSubmit) {
      onSubmit({ sourceName: name, sourceEmail: email });
    } else if (setSources) {
      setSources(prev => [...prev, { name, email, color: getRandomColor() }]);
    }
    triggerConfetti();
    if (onAdded) onAdded();
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
      {showConfetti && (
        <ConfettiLayer>
          {confettiPieces.map((piece, idx) => (
            <ConfettiPiece
              key={idx}
              $left={piece.left}
              $color={piece.color}
              $duration={piece.duration}
              $delay={piece.delay}
            />
          ))}
        </ConfettiLayer>
      )}
    </AddContainer>
  );
};

export default AddBox;
