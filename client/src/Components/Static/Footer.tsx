import React from "react";
import styled from "styled-components";
import press from "../../Assets/logo-white.png";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle, AiOutlineCopyright } from "react-icons/ai";
import { SiLinkedin } from "react-icons/si";

const Footer = () => {
  const mapping: any = [
    {
      head: "Quick Links",
      navs: "Home",
      navs1: "About",
      navs2: "Blog",
      navs3: "Contact",
    },
    {
      head: "About Us",
      navs: "Book Store",
      navs1: "Cart Page",
      navs2: "Checkout",
      navs3: "My Account",
    },
  ];
  const icon: any = [
    {
      img: <FaFacebook />,
    },
    {
      img: <AiFillTwitterCircle />,
    },
    {
      img: <SiLinkedin />,
    },
  ];
  return (
    <div>
      <Container>
        <Main>
          <Top>
            <Section1>
              <Logo src={press} />
              <Text>
                BookPress is light and clean design that is a smart choice for
                book selling landing page. BookPress has everything you need to
                take your item selling to the next level but most of all it’s
                easy to use.
              </Text>
            </Section1>
            {mapping.map((el: any) => (
              <Section2>
                <Head>{el.head}</Head>
                <Navs>{el.navs}</Navs>
                <Navs>{el.navs1}</Navs>
                <Navs>{el.navs2}</Navs>
                <Navs>{el.navs3}</Navs>
              </Section2>
            ))}
            <InputSide>
              <Head>NewsLetter</Head>
              <Write>Subscribe Now Latest Update E-Book.</Write>
              <InputHolder>
                <Input placeholder="Enter your email address..." />
                <Div>
                  <Arrow />
                </Div>
              </InputHolder>
              <Socials>
                {icon.map((el: any) => (
                  <Circle>
                    <Face>{el.img}</Face>
                  </Circle>
                ))}
              </Socials>
            </InputSide>
          </Top>
          <Bottom>
            <Write>
              <AiOutlineCopyright />
              CopyRight 2017
            </Write>
          </Bottom>
        </Main>
      </Container>
    </div>
  );
};

export default Footer;

const Bottom = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const Top = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px 0;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
  border-radius: 50%;
  margin: 10px 10px;
  transition: all 350ms;

  :hover {
    transform: scale(1.09);
    cursor: pointer;
  }
`;

const Div = styled.div`
  width: 60px;
  height: 100%;
  background-color: lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 350px;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  background-color: black;
  align-items: center;
  color: white;
`;

const Main = styled.div`
  width: 85%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  font-size: 17px;
  flex-direction: column;
`;

const Section1 = styled.div``;

const Logo = styled.img`
  width: 200px;
`;

const Text = styled.div`
  width: 350px;
`;

const Section2 = styled.div``;

const Head = styled.div`
  font-size: 25px;
  margin-bottom: 25px;
`;

const Navs = styled.div`
  margin: 15px 0;
  transition: all 350ms;
  cursor: pointer;
  :hover{
    text-decoration-line: underline;
  }
`;

const InputSide = styled.div``;

const Write = styled.div``;

const InputHolder = styled.div`
  margin: 20px 0;
  width: 330px;
  height: 50px;
  border-radius: 5px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

const Input = styled.input`
  width: 80%;
  height: 80%;
  border: 0;
  font-size: 15px;
  color: grey;
  padding-left: 5px;
  outline: 0;

  ::placeholder {
    font-size: 15px;
    color: grey;
  }
`;

const Arrow = styled(HiOutlineArrowNarrowRight)`
  color: black;
  font-size: 25px;
`;

const Socials = styled.div`
  display: flex;
`;

const Face = styled.div`
  color: white;
  margin-top: 7px;
`;
