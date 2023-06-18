import React from "react";
import styled from "styled-components";
import img1 from "../../Assets/blog-post-1-360x225.jpg";
import img2 from "../../Assets/Profile_avatar_placeholder_large-removebg-preview.png";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import pics from "../../Assets/blog-post2-1-360x225.jpg";
import pics1 from "../../Assets/blog-post6-1-360x225.jpg";

const Blogs = () => {
  const data: any = [
    {
      imgs: img1,
      text1: "What you don't know would make a great book",
    },
    {
      imgs: pics,
      text1: "Many Sites where you can order your fav book",
    },
    {
      imgs: pics1,
      text1: "Lanny book that helps a child to a habit",
    },
  ];
  return (
    <div>
      <Container>
        <Main>
          <Holder>
            {data.map((el: any) => (
              <Card>
                <DivHold style={{ overflow: "hidden" }}>
                  <Image src={el.imgs} />
                </DivHold>
                <IconPart>
                  <Div>
                    <Icon1 src={img2} />
                    <Text>Administrator</Text>
                  </Div>
                  <Div>
                    <Icon2 />
                    <Text>09th January 2017</Text>
                  </Div>
                </IconPart>
                <BoldText>{el.text1}</BoldText>
                <SmallText>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Teneturesse aliquid necessitatibus! Laborum omnis sit
                  corporis, eaeligendi odit quod! Lorem ipsum dolor sit amet...
                </SmallText>
                <Linker>Read more</Linker>
              </Card>
            ))}
          </Holder>
          <Button>View more</Button>
        </Main>
      </Container>
    </div>
  );
};

export default Blogs;

const Holder = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.div`
  border-radius: 20px;
  margin-top: 20px;
  height: 30px;
  width: 130px;
  padding: 5px 10px;
  border: 2px solid black;
  display: flex;
  font-size: 18px;
  justify-content: center;
  align-items: center;
  transition: all 350ms;
  cursor: pointer;
  font-weight: 500;
  :hover {
    background-color: black;
    color: white;
  }
`;

const DivHold = styled.div`
  width: 100%;
  height: 230px;
  object-fit: cover;
`;

const Container = styled.div`
  width: 100%;
  min-height: 500px;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
  height: 100%;
  align-items: center;
  flex-direction: column;
`;

const Card = styled.div`
  min-height: 300px;
  width: 370px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  transition: all 350ms;
  :hover {
    transform: scale(1.09);
  }
`;

const IconPart = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 5px;
  cursor: pointer;
`;

const Icon1 = styled.img`
  width: 25px;
`;

const Text = styled.div`
  font-size: 20px;
  color: #a3a3a3;
`;

const Icon2 = styled(BsFillCalendarCheckFill)`
  font-weight: 17px;
  color: #a3a3a3;
  margin-right: 3px;
`;

const BoldText = styled.div`
  font-size: 25px;
  font-weight: 700;
  margin: 0 10px;
  transition: all 350ms;
  cursor: pointer;

  :hover {
    color: #2020fc;
    
    ${Image} {
      transform: scale(1.09);
    }
  }
`;

const SmallText = styled.div`
  font-size: 17px;
  width: 90%;
  margin-left: 10px;
`;

const Linker = styled.div`
  margin: 10px 10px;
  color: blue;
  cursor: pointer;
`;
