import React from "react";
import styled from "styled-components";
import pics1 from "../../Assets/team-4.jpg";
import pics2 from "../../Assets/testimonial.png";
import pics3 from "../../Assets/testimonial3.png";

const Partners = () => {
  const reviewMap: {}[] = [
    {
      imgs: pics1,
      btext: "Hassan Mahamud.",
    },
    {
      imgs: pics2,
      btext: "Andrew Rasal",
    },
    {
      imgs: pics3,
      btext: "Samia Jasmine",
    },
  ];
  return (
    <>
      <Container>
        <Main>
          {reviewMap.map((el: any) => {
            return (
              <Reviews>
                <Image src={el.imgs} />
                <BigText>{el.btext}</BigText>
                <SubText>Partner, Book-Press</SubText>
                <SmallText>
                  These days are all Happy and Free. These days are all share
                  them with me oh Baby the Brady Bunch the Brady Bunch thats all
                  the way we all became the Brady Bunch the no one you see is
                  smarter than he so join us.
                </SmallText>
              </Reviews>
            );
          })}
        </Main>
      </Container>
    </>
  );
};

export default Partners;

const Container = styled.div`
  background-color: #f8f9fa;
  width: 100%;
  min-height: 100vh;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  display: flex;
  width: 85%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Reviews = styled.div`
  border-radius: 5px;
  border: 1px solid lightgrey;
  width: 320px;
  height: 350px;
  background-color: #fff;
  position: relative;
  color: #212529;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  text-align: center;
`;

const Image = styled.img`
  width: 150px;
  border: 10px solid #0275d8;
  border-radius: 50%;
  left: 90px;
  position: absolute;
  top: -80px;
`;

const BigText = styled.div`
  margin-top: 100px;
  font-size: 30px;
  font-weight: 700;
`;

const SubText = styled.div`
  color: #6c757d;
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const SmallText = styled.div`
  font-size: 17px;
  width: 90%;
`;
