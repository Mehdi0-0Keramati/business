import styled from "styled-components";
import woman from "../assets/bg/woman.png"
import AnimatedShapes from "./AnimatedShapes";
const Intro = () => {
  const smallScreen = window.screen.width <= 480 ? true : false;
  return (
    <Container>
      <Left>
        <Title>Advantage is creative age</Title>
        <Desc>
          We believe that designing products and services in close partnership
          with our clients is the only way to have a real impact on their
          business.
        </Desc>
        <Info>
          <Button>START A PROJECT</Button>
          <Contact>
            <Phone>Call Us (012) 345 - 6789</Phone>
            <ContactText>For any question or concern</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right><Image style={{ display: smallScreen ? "none" : "block" }} src={woman} /></Right>
      <AnimatedShapes />
    </Container>
  );

}
const Container = styled.div`
height:calc(100vh - 50px);
display:flex;
padding:20px
`;

const Left = styled.div`
width:60%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;

const Title = styled.h1`
font-size:60px;
width:60%;
  @media only screen and (max-width: 480px) {
font-size:40px;
width: 100%;
  }
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Info = styled.div`
  width: 60%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-top:50px;
  
  @media only screen and (max-width: 480px) {
    flex-direction:column;
  }

`;
const Button = styled.button`
cursor:pointer;
padding:1rem; 
background:darkblue;
color:snow; 
border-radius:10px;
letter-spacing:2px
`;

const Contact = styled.div`
display:flex;
flex-direction:column;
@media only screen and (max-width: 480px) {
  display:none;
 }
`;

const Phone = styled.span`
color:pink;
`;

const ContactText = styled.span`
color:gray;
margin-top:5px;
`;

const Right = styled.div`
width:40%;
`;

const Image = styled.img`
width:50rem;
position:absolute;
bottom:0;
right:0%;

@media only screen and (max-width: 880px) {
  right:-20%;
 };

`;

export default Intro;