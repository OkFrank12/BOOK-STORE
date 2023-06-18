import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Button from "./Button";
import styled from "styled-components";

interface iBookCard {
  images?: string;
  text?: string;
  cancel?: string;
  bold?: string;
}

const BooksProps: React.FC<iBookCard> = ({ images, text, cancel, bold }) => {
  return (
    <div>
      <Container>
        <BookImg src={images} />
        <Descriptions>
          <BigText>{text}</BigText>

          <StarHolder>
            <Icon />
            <Icon />
            <Icon />
            <Icon />
            <Icon1 />
          </StarHolder>

          <NumHolder>
            <CancelNum>{cancel}</CancelNum>
            <BoldNum>{bold}</BoldNum>
          </NumHolder>
        </Descriptions>
        <ButtonSide>
          <Button w="120px" title="Add to cart" bgh="#044a86" bg="#0275D8" />
        </ButtonSide>
      </Container>
    </div>
  );
};

export default BooksProps;

const Container = styled.div`
  width: 270px;
  min-height: 310px;
  overflow: hidden;
  border: 1px solid lightgrey;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const BookImg = styled.img`
  width: 250px;
  height: 250px;
`;

const Descriptions = styled.div`
  width: 90%;
`;

const BigText = styled.div`
  font-size: 25px;
  font-weight: 500;
  color: #212529;;
`;

const StarHolder = styled.div`
  display: flex;
  margin-top: 5px;
`;

const Icon = styled(AiFillStar)`
  color: #fec42d;
  font-size: 25px;
`;

const Icon1 = styled(AiOutlineStar)`
  font-size: 25px;
  color: lightgrey;
`;

const NumHolder = styled.div`
  display: flex;
  margin: 10px 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const CancelNum = styled.div`
  text-decoration-line: line-through;
  color: grey;
  font-size: 25px;
`;

const BoldNum = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #0275d8;
  margin-left: 5px;
`;

const ButtonSide = styled.div`
  border-top: 1px solid lightgrey;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  background-color: #fffafae1;
`;
