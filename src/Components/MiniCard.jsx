import styled from "styled-components";
import { FcSearch } from "react-icons/fc"

const Container = styled.div`
  width: 100px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  @media only screen and (max-width: 480px) {
    width: 50px
  }
`;

const Icon = styled.span`
  font-size: 20px;
`;

const Text = styled.span`
  margin-top: 10px;
  text-align:center;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const MiniCard = () => {
    return (
        <Container>
            <Icon><FcSearch /></Icon>
            <Text>Lorem ipsum dolor sit amet consectetur.</Text>
        </Container>
    );
};

export default MiniCard;