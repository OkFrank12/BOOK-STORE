import React from "react";
import styled from "styled-components";
import CircleProps from "../../Components/Static/CircleProps";

const CustomerFeeds = () => {
  return (
    <div>
      <Container>
        <Main>
          <CircleProps title1="92500" title2="Subscribers"/>
          <CircleProps title1="500" title2="Free Download"/>
          <CircleProps title1="5000" title2="Product List"/>
          <CircleProps title1="10" title2="Ebooks"/>
        </Main>
      </Container>
    </div>
  );
};

export default CustomerFeeds;

const Container = styled.div`
  background-color: #f76e2e;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 350px;
  padding: 30px 0;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: 100%;
`;
