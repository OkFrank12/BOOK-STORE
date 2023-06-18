import React from "react";
import Button from "../../Components/Static/Button";
import styled from "styled-components";
import BooksProps from "../../Components/Static/BooksProps";
import books from "../../Assets/book-mockup4-500x662.png";
import books1 from "../../Assets/book-mockup8-500x662.png";
import books2 from "../../Assets/book-mockup1-500x662.png";
import books3 from "../../Assets/book-mockup2-500x662.png";
import { BsCircleFill } from "react-icons/bs";
import { HiOutlineArrowNarrowUp } from "react-icons/hi";

const BooksPanel = () => {

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
                title="Browse All Books"
                bgh="#044a86"
                bg="#0275D8"
              />
            </Section1>
          </Heading>
          <Bottom>
            <BooksProps
              images={books}
              text="Fearful Attempts for defending lost"
              bold="$27.00"
              cancel="$32.00"
            />
            <BooksProps
              images={books1}
              text="Half Moon by James Koly & Harpers"
              cancel="$32.00"
              bold="$27.00"
            />
            <BooksProps
              text="Dark in Mask Gratitude"
              images={books2}
              cancel="$32.00"
              bold="$28.00"
            />
            <BooksProps
              text="A Brief History of America"
              cancel="$45.00"
              bold="$40.00"
              images={books3}
            />
          </Bottom>
          <DotsHolder>
            <Dots props="1" />
            <Dots props="" />
            <Dots props="" />
            <Dots props="" />
            <Dots props="" />
          </DotsHolder>
          <Punchit>
            <HiOutlineArrowNarrowUp size={40} />
          </Punchit>
        </Main>
      </Container>
    </div>
  );
};

export default BooksPanel;

const Punchit = styled.div`
  width: 50px;
  height: 65px;
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;
  border-radius: 3px;
  background-color: black;
  transition: all 350ms;
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  right: 20px;
  position: fixed;

  :hover{
    background-color: grey;
    color: black;
  }
`;


const DotsHolder = styled.div``;

const Dots = styled(BsCircleFill)<{
  props: string;
}>`
  font-size: 13px;
  color: ${({ props }) => (props ? "#0275d8" : "lightgrey")};
  margin: 0 7px;

  :hover{
    color: #0275d8;
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
`;

const Main = styled.div`
  width: 85%;
  height: 100%;
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
`;
