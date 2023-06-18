import React from "react";
import styled from "styled-components";


interface iAuthors {
  images?: any;
  bText?: string;
  tText?: string;
  sText?: string;
}

const AuthorsProp: React.FC<iAuthors> = ({images, bText, tText, sText }) => {
  return (
    <div>
      <Container>
        <Picture src={images} />
        <Holder>
          <Div>
            <BoldText>{bText}</BoldText>
            <TinyText>{tText}</TinyText>
          </Div>
          <SmallText>{sText}</SmallText>
        </Holder>
      </Container>
    </div>
  );
};

export default AuthorsProp;

const Container = styled.div`
  width: 270px;
  height: 350px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  flex-direction: column;
  overflow: hidden;
`;

const Picture = styled.img`
  width: 100%;
`;

const Holder = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Div = styled.div`
  margin-left: 10px;
`;

const BoldText = styled.div`
  font-size: 23px;
  font-weight: 600;
`;

const SmallText = styled.div`
  margin-top: 8px;
  margin-right: 10px;
`;

const TinyText = styled.div`
  font-weight: 500;
  font-size: 18px;
`;
