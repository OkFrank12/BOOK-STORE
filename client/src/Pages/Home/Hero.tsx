import styled from "styled-components";
import img from "../../Assets/slider5.jpg";
import Button from "../../Components/Static/Button";
import { HiOutlineArrowNarrowUp } from "react-icons/hi";

const Hero = () => {
  return (
    <div>
      <Container>
        <Main>
          <h1>Get Your New Book With Best Price Find Your Book Now</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunta
            sunt quaerat, eligendi ad, ipsum sit culpa porro fuga atque andersi
            delectus nostrum sapiente cupiditate.
          </p>
          <Panel>
            <Input placeholder="Keyword" />
            <Line />
            <Select>
              <option value="">Category</option>
              <option value="">Education</option>
              <option value="">Fine Arts</option>
              <option value="">History</option>
              <option value="">Music</option>
              <option value="">Philosophy</option>
              <option value="">Religion</option>
            </Select>
            <Line />
            <Select>
              <option value="">Writer</option>
              <option value="">Harner Harpers</option>
              <option value="">John Doe</option>
              <option value="">Jonathan Barnes</option>
              <option value="">Marcos Trison</option>
              <option value="">Megan Kolman</option>
              <option value="">Richard Roe</option>
            </Select>
            <Button title="Search" w="90px" bg="darkorange" bgh="#dd7a00" />
          </Panel>
          <Linkers>
            <BoldTitle>Popular Searches:</BoldTitle>
            <span>Education</span>
            <span>Fine Arts</span>
            <span>History</span>
            <span>Music</span>
            <span>Philosophy</span>
            <span>Religion</span>
          </Linkers>
        </Main>
      </Container>
    </div>
  );
};

export default Hero;


const Container = styled.div`
  width: 100%;
  display: flex;
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
`;

const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 180px 0;

  h1 {
    width: 56%;
    font-size: 50px;
    font-weight: 700;
    text-align: center;
    margin: 0;
  }
  p {
    width: 56%;
    color: white;
    text-align: center;
    margin-top: 35px;
    font-size: 23.5px;
  }
`;

const Panel = styled.div`
  width: 55%;
  height: 60px;
  background-color: white;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
`;

const Input = styled.input`
  width: 170px;
  padding-left: 10px;
  border: 0;
  outline: 0;
  color: grey;
  font-size: 18px;
  ::placeholder {
    color: grey;
    font-size: 18px;
  }
`;

const Line = styled.div`
  height: 18px;
  border: 1px solid silver;
  margin-left: 10px;
`;

const Select = styled.select`
  width: 200px;
  border: 0;
  outline: 0;
  padding: 0 5px;
  font-size: 18px;
  margin: 0 5px;

  option {
    :hover {
      background-color: silver;
    }
  }
`;

const Linkers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  span {
    text-decoration-line: underline;
    margin: 0 7px;
    font-size: 18px;
    cursor: pointer;
  }
`;

const BoldTitle = styled.div`
  font-size: 20px;
`;
