import styled from "styled-components";
import { AiTwotonePhone } from "react-icons/ai"
import { IoIosSend } from "react-icons/io"
import { MdLocationOn } from "react-icons/md"


const Container = styled.div`
height: 90%;
// background: url("https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png");
background-color: white;
background-image:
  linear-gradient(45deg, #ff00002c 25%, transparent 25%),
  linear-gradient(-45deg, #ff00002c 25%, transparent 25%),
  linear-gradient(45deg, transparent 75%, #ff00002c 75%),
  linear-gradient(-45deg, transparent 75%, #ff00002c 75%);
background-size:20px 20px;
background-position: 0 0, 0 10px, 10px -10px, -10px 0px;

`;

const Wrapper = styled.div`
height: 100vh;
padding: 20px;
display: flex;
align-items: center;
justify-content: center;
@media only screen and (max-width: 480px) {
flex-direction: column;
}
`;

const FormContainer = styled.div`
width: 50%;
@media only screen and (max-width: 480px) {
width: 100%;
}
`;

const Title = styled.h1`
margin: 50px;
margin-top: 0;
@media only screen and (max-width: 480px) {
margin: 20px;
}
`;

const Form = styled.form`
height: 250px;
display: flex;
align-items: center;
justify-content: center;
@media only screen and (max-width: 480px) {
flex-direction: column;
}
`;

const LeftForm = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
margin-right: 20px;
@media only screen and (max-width: 480px) {
height: 50%;
margin-right: 0;
}
`;

const RightForm = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
@media only screen and (max-width: 480px) {
height: 50%;
}
`;

const Input = styled.input`
width: 200px;
padding: 20px;
@media only screen and (max-width: 480px) {
padding: 5px;
}
`;

const TextArea = styled.textarea`
width: 200px;
height: 60%;
padding: 20px;
@media only screen and (max-width: 480px) {
padding: 5px;
margin-top: 20px;
}
`;

const Button = styled.button`
border: none;
padding: 15px;
background-color: darkblue;
color: white;
font-size: 20px;
border-radius: 10px;
margin-top: 20px;
cursor: pointer;
@media only screen and (max-width: 480px) {
padding: 5px;
font-size: 14px;
}
`;

const AddressContainer = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
@media only screen and (max-width: 480px) {
width: 100%;
margin-top: 20px;
}
`;

const AddressItem = styled.div`
display: flex;
align-items: center;
margin-bottom: 50px;
@media only screen and (max-width: 480px) {
margin-bottom: 20px;
}
`;

const Icon = styled.span`
width: 20px;
font-size:2rem;
color:darkred;  
margin-right: 20px;
@media only screen and (max-width: 480px) {
width: 15px;
font-size:1.3rem;
}
`;

const Text = styled.span`
font-size: 20px;
margin-right: 15px;
@media only screen and (max-width: 480px) {
font-size: 14px;
}
`;
const Service = () => {

    return (
        <Container>
            <Wrapper>
                <FormContainer>
                    <Title>
                        Questions? <br /> Let's Get In Touch
                    </Title>
                    <Form>
                        <LeftForm>
                            <Input placeholder="Your Name" />
                            <Input placeholder="Your Email" />
                            <Input placeholder="Subject" />
                        </LeftForm>
                        <RightForm>
                            <TextArea placeholder="Your Message" />
                            <Button>Send</Button>
                        </RightForm>
                    </Form>
                </FormContainer>
                <AddressContainer>
                    <AddressItem>
                        <Icon><MdLocationOn /></Icon>
                        <Text>azadi St., tehran, iran</Text>
                    </AddressItem>
                    <AddressItem>
                        <Icon><AiTwotonePhone /></Icon>

                        <Text>+98 9938279114</Text>
                    </AddressItem>
                    <AddressItem>
                        <Icon><IoIosSend /></Icon>
                        <Text>mti@gmail.com</Text>
                    </AddressItem>
                </AddressContainer>
            </Wrapper>
        </Container>
    );
}

export default Service;