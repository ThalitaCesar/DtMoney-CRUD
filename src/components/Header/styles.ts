import styled from "styled-components";

export const Container = styled.header`
background: var(--grey);
height: 212px;
`

export const Content = styled.div`
max-width: 1119.8px;
margin: 0 auto;
padding: 2rem 1rem 10rem ;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

button{

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 20px;
gap: 10px;
width: 172px;
height: 50px;
background: var(--green-light);
border:none;
border-radius: 6px;
transition: filter 0.2;
&:hover{
    filter: brightness(0.9)
}
}
`