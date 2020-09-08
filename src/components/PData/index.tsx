import React from "react";
import { Container } from "./styles";

interface PDataProps {
  title: string;
  text: string;
}

const PData: React.FC<PDataProps> = ({ title, text }) => {
  return (
    <Container>
      <strong>{title} : </strong>
      <small>{text}</small>
    </Container>
  );
};

export default PData;
