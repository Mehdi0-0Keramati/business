import { useState } from "react";
import styled from "styled-components";
const Navbar = () => {

    const [Show, setShow] = useState(false);
    const smallScreen = window.screen.width <= 768 ? true : false

    return (
        <Container>
            <Logo>Agency</Logo>
            <Menu style={{ display: smallScreen ? "none" : "flex" }}>
                <Item>Home</Item>
                <Item>Features</Item>
                <Item>Service</Item>
                <Item>Pricing</Item>
                <Item>Contact</Item>
            </Menu>
            {
                smallScreen &&
                <ShowItems onClick={() => setShow(!Show)}>|||</ShowItems>
            }
            <ResMenu style={{ display: Show ? "flex" : "none" }}>
                <Close onClick={() => setShow(false)}>Close</Close>
                <Item>Home</Item>
                <Item>Features</Item>
                <Item>Service</Item>
                <Item>Pricing</Item>
                <Item>Contact</Item>
            </ResMenu>

            <Button>Join Today</Button>
        </Container >
    );

}
const Logo = styled.a`
font-size:2rem;
text-decoration:underline crimson
`
const Container = styled.div`
padding:0 1rem;
width:100%;
height:50px;
display:flex;
align-items:center;
justify-content: space-evenly;
`;
const Menu = styled.ul`
align-items:center;
justify-content:space-evenly;
width:40%;
margin-left:3rem;
cursor:pointer;
`
const ShowItems = styled.button`
position:absolute;
top:.2rem;
font-size:1.7rem;
padding:.2rem;
rotate:90deg;
cursor:pointer;
`;

const Close = styled.button`
position:absolute;
top:1rem;
left:1rem;
padding:.3rem;
color:gray;
`

const ResMenu = styled.ul`
width:100vw;
height:0;
overflow:hidden;
position:fixed;
top:0;
left:0;
background:orange;
align-items:center;
justify-content:space-evenly;
flex-direction:column;
z-index:3;
animation:menu .5s linear forwards;
@keyframes menu {
    to{
    height:16rem;
    }
}
`;

const Item = styled.li`
cursor:pointer;
list-style:none;
color:gray;
margin:1rem;
`
const Button = styled.button`
height:2rem;
padding:0 .6rem;
border-radius:.5rem;
border:1px solid white;
color:white;
background:crimson;
cursor:pointer;
margin-left:auto;
`

export default Navbar;