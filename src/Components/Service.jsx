import styled from "styled-components";
import { AiOutlinePlayCircle } from "react-icons/ai"
import { useState } from "react"
import MiniCard from "./MiniCard";
import secWoman from "../assets/bg/secWoman.png"
const Container = styled.div`
display: flex;
height: 100vh;
@media only screen and (max-width: 480px) {
flex-direction: column;
}
`;

const Left = styled.div`
width: 50%;
position: relative;
@media only screen and (max-width: 480px) {
display: none;
}
`;
const Image = styled.img`
height:100%;
background:no-repeat center center/cover;
position:absolute;
bottom:0;
left:0;
@media only screen and (max-width: 880px) {
    left:-20%;
    width:60rem;

}
`

const Video = styled.video`
display: ${(props) => !props.open && "none"};
height: 300px;
position: absolute;
top: 0;
bottom: 0;
right: 0;
margin: auto;
@media only screen and (max-width: 480px) {
width: 100%;
}
`;

const Right = styled.div`
width: 50%;
@media only screen and (max-width: 480px) {
width: 100%;
}
`;

const Wrapper = styled.div`
padding: 50px;
display: flex;
flex-direction: column;
@media only screen and (max-width: 480px) {
padding: 20px;
}
`;

const Title = styled.h1``;

const Desc = styled.p`
font-size: 20px;
margin-top: 20px;
color: #555;
`;

const CardContainer = styled.div`
display: flex;
justify-content: space-between;
margin-top: 50px;
`;

const Button = styled.button`
width: 180px;
border: none;
border-radius: 10px;
background-color: darkblue;
color: white;
font-size: 20px;
padding: 15px;
margin-top: 50px;
display: flex;
align-items: center;
cursor:pointer;
z-index:2;
`;

const Icon = styled.span`
font-size:1.3rem;
margin:.3rem .2rem 0 0 ;
`;

const Modal = styled.div`
width: 100vw;
height: 100vh;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
position: absolute;
background-color: white;
padding: 5px;
border: none;
border-radius: 5px;
right: 5px;
top: 30%;
`;
const Service = () => {
    const smallScreen = window.screen.width <= 480 ? true : false;
    const [open, setOpen] = useState(false);
    return (
        <Container>
            <Left>
                <Image open={open} src={secWoman}></Image>
                <Video
                    open={open}
                    autoPlay
                    loop
                    controls
                    src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
                />
            </Left>
            <Right>
                <Wrapper>
                    <Title>Simple process to start</Title>
                    <Desc>
                        We provide digital experience services to startups and small
                        businesses to looking for a partner of their digital media, design &
                        development, lead generation and communications requirents. We work
                        with you, not for you. Although we have a great resources
                    </Desc>
                    <CardContainer>
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                    </CardContainer>
                    <Button onClick={() => setOpen(true)}>
                        <Icon><AiOutlinePlayCircle /></Icon>
                        How it works
                    </Button>
                </Wrapper>
            </Right>
            {
                smallScreen &&
                open && (
                    <Modal>
                        <Video
                            open={open}
                            autoPlay
                            loop
                            controls
                            src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
                        />
                        <CloseButton onClick={() => setOpen(false)}>Close</CloseButton>
                    </Modal>
                )}
        </Container>
    );
}

export default Service;