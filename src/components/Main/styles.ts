import styled from "styled-components";

export const PersonalData = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem auto;
  max-width: 60rem;
  background: #fcecf1;

  fieldset {
    padding: 1rem;
    width: 100%;
  }

  fieldset h2 {
    font-size: 1.5rem;
  }

  fieldset hr {
    margin: 0.75rem 0;
    height: 2px;
    width: 25%;
    border-width: 0;
    background: #000;
  }
  fieldset span{
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
  }
  
  fieldset span svg{
  height: 2rem;
  width: 2rem;
  color: black;
  margin-right: 0.5rem;
  }
  
  fieldset span + span{
    display: flex;
    align-items: center;
    margin-left: 0.5rem;
  }
 
`;

export const Divider = styled.hr`
    width: 100% !important;
    background: #6a6a77 !important;
`;

export const Address = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  align-items: center;
`;

export const Contacts = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 1rem 0;
`;

export const Column =styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 1rem 0;
  
  span, strong, p{
  margin: 0.5rem;
  }
  
  p{
  display: flex;
  align-items: center;
  text-align: center;
  }
`;


