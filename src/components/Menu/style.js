import styled from "styled-components";
import Button from '../Button';

export const LogoImage = styled.img`
    max-width: 168px;

    @media ( max-width: 500px){
        max-width :105px;

    }

`;

export const MenuWrapper = styled.nav`
   width: 100%;
   height: 94px; 
   z-index:1;
   
   top: 0;
   left: 0;
    padding-left: 5%;
    padding-right: 5%;

    background-color: var(--white);
    border-bottom : 2px solid var(--primary);

    display: flex;
    justify-content: space-between;
    align-items: center;
    position:fixed;

    @media ( max-width: 500px){
        height: 40px; 
        justify-content: center;
    }


`;

export const ButtonLink = styled(Button)`
    color: var(--white);
    border: 1px solid var(--white);
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    padding: 16px 24px;
    text-decoration: none;
    transition: opacity .3s;

    &:hover,
    &:focus{
        opacity: .5;
    }

    @media ( max-width: 500px){
        background-color:var(--primary);
        border-radius:0;
        border:0;
        bottom: 0;
        color: var(--white);
        left: 0;
        outline:0;
        position: fixed;
        right:0;
        text-align: center;
    }
`;