import styled from "styled-components";
import phonehand from "../assets/bg/phonehand.png"
import AnimatedShapes from "./AnimatedShapes";

const Feature = () => {

  const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  min-height:100vh !important;

  @media only screen and (max-width: 480px) {
    flex-direction:column;
  }

`
  const Left = styled.div`
  width:50%;
`
  const Image = styled.img`
  width:100%;
  @media only screen and (max-width: 480px) {
    width:20rem;
  }
`
  const Right = styled.div`
  width:50%;

  @media only screen and (max-width: 480px) {
  width:90%;
  }
`
  const Title = styled.span`
  font-size: 70px;
  @media only screen and (max-width: 480px) {
    font-size: 50px;
  }
`;

  const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;

  const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;

  const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;
`;

  return (
    <Container>
      <Left><Image src={phonehand} /></Left>
      <Right>
        <Title>
          <b>good</b> design <br />
          <b>good</b> business
        </Title>
        <SubTitle>We know that good design means good business.</SubTitle>
        <Desc>
          We help our clients succeed by creating brand identities, digital
          experiences, and print materials that communicate clearly, achieve
          marketing goals, and look fantastic.
        </Desc>
        <Desc>
          We care your business and guarantee you to achieve marketing goals.
        </Desc>
        <Button>Learn More</Button>
      </Right>
      <AnimatedShapes />
    </Container>
  );
}

export default Feature;