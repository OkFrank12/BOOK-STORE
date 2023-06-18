import React from "react";
import Button from "../../Components/Static/Button";
import styled from "styled-components";
import author from "../../Assets/author-1-400x400.jpg";
import author1 from "../../Assets/team-2-1-400x400.jpg";
import author0 from "../../Assets/team-1-1-400x400.jpg";
import author2 from "../../Assets/slider2-1-400x400.jpg";
import { BsCircleFill } from "react-icons/bs";
import AuthorsProp from "../../Components/Static/AuthorsProp";

const Authors = () => {
  return (
    <div>
      <Container>
        <Main>
          <Heading>
            <Section1>
              <BoldText>Popular books in Bookpress</BoldText>
              <LightText>
                Lorem ipsum dolor sit amet, consectetur adipisicing t,
                consectetur adipisicing elit. Ut quos cupiditate, nemo debitis,
                explicabo voluptas.
              </LightText>
            </Section1>
            <Section1>
              <Button
                w="180px"
                title="Browse All Writers"
                bgh="#044a86"
                bg="#0275D8"
              />
            </Section1>
          </Heading>
          <Bottom>
            <AuthorsProp
              images={author0}
              bText="Hannah Harpers"
              sText="2 Books"
              tText="Author & Writer"
            />
            <AuthorsProp
              images={author}
              bText="John Doe"
              sText="2 Books"
              tText="Author & Writer"
            />
            <AuthorsProp
              images={author2}
              bText="Jonathan Barnes"
              sText="3 Books"
              tText="Writer"
            />
            <AuthorsProp
              images={author1}
              bText="Marcos Trison"
              sText="4 Books"
              tText="Writer"
            />
          </Bottom>
        </Main>
      </Container>
    </div>
  );
};

export default Authors;

const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
`;

const Main = styled.div`
  width: 85%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
`;

const BoldText = styled.div`
  font-size: 42px;
  font-weight: 700;
  line-height: 2;
  color: #212529;
`;

const LightText = styled.div`
  font-size: 18px;
  width: 530px;
`;

const Section1 = styled.div``;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 600px;
  cursor: pointer;
`;
