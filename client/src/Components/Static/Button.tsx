import React from "react";
import styled from "styled-components";

interface iBtn {
  w?: string;
  title?: string;
  bg?: string;
  bgh?: string;
}
const Button: React.FC<iBtn> = ({ w, title, bg, bgh }) => {
  return (
    <div>
      <Container w={`${w}`} bg={`${bg}`} bgh={`${bgh}`}>
        {title}
      </Container>
    </div>
  );
};

export default Button;
const Container = styled.div<{
  w: string;
  bg: string;
  bgh: string;
}>`
  width: ${({ w }) => w};
  height: 35px;
  padding: 5px 10px;
  background-color: ${({ bg }) => bg};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  transition: all 350ms;
  font-weight: 400;
  font-size: 20px;
  cursor: pointer;
  :hover {
    background-color: ${({ bgh }) => bgh};
  }
`;
