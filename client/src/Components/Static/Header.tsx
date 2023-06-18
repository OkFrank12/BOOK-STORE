import { useEffect, useState } from "react";
import Button from "./Button";
import styled from "styled-components";
import BookStore from "../../Assets/logo.png";
import { BsCart3, BsSearch } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";

const Header = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.pageYOffset;

      if (scroll > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  const [enter, setEnter] = useState<boolean>(false);

  const onEnter = () => {
    setEnter(!enter);
  };
  const [enter1, setEnter1] = useState<boolean>(false);

  const onEnter1 = () => {
    setEnter1(!enter1);
  };
  return (
    <div>
      {isSticky ? (
        <Container p="fixed">
          <Main>
            <Logo src={BookStore} />
            <NavsHolder>
              <Navs bg="" pa="">
                Home
              </Navs>
              <Navs bg="1" pa="">
                About
              </Navs>

              <Navs bg="1" pa="relative" onMouseEnter={onEnter}>
                Book Store <Icon />
              </Navs>
              {enter ? (
                <Dropdown onMouseLeave={onEnter}>
                  <Div>All Books</Div>
                  <Div>Single Book</Div>
                  <Div>Checkout</Div>
                  <Div>My Account</Div>
                </Dropdown>
              ) : null}
              <Navs bg="1" pa="">
                Blogs
              </Navs>
              <Navs bg="1" pa="">
                Contact
              </Navs>
              <Navs bg="1" pa="relative" onMouseEnter={onEnter1}>
                More <Icon />
              </Navs>
              {enter1 ? (
                <Dropdown2 onMouseLeave={onEnter1}>
                  <Div>Landing Page with Slider - Dark</Div>
                  <Div>Landing Page with Slider - Light</Div>
                  <Div>Landing Page with Video - Dark</Div>
                  <Div>Landing Page with Video - Light</Div>
                  <Div>Back to BookPress Theme Preview page</Div>
                </Dropdown2>
              ) : null}
            </NavsHolder>
            <CallToAction>
              <Search />
              <Carts />
              <Button w="120px" title="My Account" bgh="#044a86" bg="#0275D8" />
            </CallToAction>
          </Main>
        </Container>
      ) : (
        <Container p="">
          <Main>
            <Logo src={BookStore} />
            <NavsHolder>
              <Navs bg="" pa="">
                Home
              </Navs>
              <Navs bg="1" pa="">
                About
              </Navs>

              <Navs bg="1" pa="relative" onMouseEnter={onEnter}>
                Book Store <Icon />
              </Navs>
              {enter ? (
                <Dropdown onMouseLeave={onEnter}>
                  <Div>All Books</Div>
                  <Div>Single Book</Div>
                  <Div>Checkout</Div>
                  <Div>My Account</Div>
                </Dropdown>
              ) : null}
              <Navs bg="1" pa="">
                Blogs
              </Navs>
              <Navs bg="1" pa="">
                Contact
              </Navs>
              <Navs bg="1" pa="relative" onMouseEnter={onEnter1}>
                More <Icon />
              </Navs>
              {enter1 ? (
                <Dropdown2 onMouseLeave={onEnter1}>
                  <Div>Landing Page with Slider - Dark</Div>
                  <Div>Landing Page with Slider - Light</Div>
                  <Div>Landing Page with Video - Dark</Div>
                  <Div>Landing Page with Video - Light</Div>
                  <Div>Back to BookPress Theme Preview page</Div>
                </Dropdown2>
              ) : null}
            </NavsHolder>
            <CallToAction>
              <Search />
              <Carts />
              <Button w="120px" title="My Account" bgh="#044a86" bg="#0275D8" />
            </CallToAction>
          </Main>
        </Container>
      )}
    </div>
  );
};

export default Header;

const Dropdown = styled.div`
  width: 170px;
  min-height: 100px;
  border-radius: 3px;
  background-color: white;
  border: 1px solid lightgrey;
  position: absolute;
  top: 60px;
  right: 690px;
`;

const Dropdown2 = styled.div`
  min-width: 200px;
  min-height: 100px;
  border-radius: 3px;
  background-color: white;
  border: 1px solid lightgrey;
  position: absolute;
  top: 60px;
  right: 330px;
`;

const Div = styled.div`
  margin: 5px 0;
  padding: 3px 15px;
  transition: all 350ms;

  :hover {
    background-color: lightgrey;
    cursor: pointer;
  }
`;

const Icon = styled(BiChevronDown)`
  margin-left: 2px;
  font-size: 20px;
  font-weight: 700;
`;

const Container = styled.div<{
  p: string;
}>`
  width: 100%;
  padding: 5px 0;
  height: 80px;
  display: flex;
  justify-content: center;
  background-color: white;
  align-items: center;
  z-index: 10;
  position: ${({ p }) => p};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: 100%;
`;

const Logo = styled.img`
  width: 150px;
`;

const NavsHolder = styled.div`
  display: flex;
  color: black;
`;

const Navs = styled.div<{
  bg: string;
  pa: string;
}>`
  margin: 0 20px;
  position: ${({ pa }) => pa};
  color: ${({ bg }) => (bg ? "black" : "#0670cc;")};
  transition: all 350ms;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    color: #025aa5;
    cursor: pointer;
  }
`;

const CallToAction = styled.div`
  display: flex;
  width: 220px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const Search = styled(BsSearch)`
  color: #025aa5;
  font-size: 20px;
  margin-right: 15px;
`;

const Carts = styled(BsCart3)`
  color: #025aa5;
  font-size: 20px;
  margin-right: 20px;
`;
