import React from "react";
import styled from "styled-components";

interface iPropsCircle {
  title1?: string;
  title2?: string;
}

const CircleProps: React.FC<iPropsCircle> = ({ title1, title2 }) => {
  return (
    <>
      <Container>
        <Main>
          <Div1>{title1}</Div1>
          <Div2>
            <SmallText>{title2}</SmallText>
            <Line />
          </Div2>
        </Main>
      </Container>
    </>
  );
};

export default CircleProps;

const Container = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 7px solid #fbb797;
  color: white;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const Div1 = styled.div`
  font-size: 50px;
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SmallText = styled.div`
  font-size: 18px;
`;

const Line = styled.div`
  border-bottom: 1px solid white;
  width: 50px;
  margin-top: 5px;
`;
