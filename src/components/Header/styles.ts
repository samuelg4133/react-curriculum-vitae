import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 6rem;
  padding: 2rem 0;
  background: #ddd;
`;

export const ProfilePhoto = styled.div`
  display: flex;
  align-items: center;
  width: 5rem;
  padding: 4rem;
  margin-right: 5rem;

  img {
    width: 5rem;
    border-radius: 50%;
    border: 0.25rem solid white;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
  }

  label {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
  label + label {
    font-weight: 700;
    color: #123;
  }
`;

export const Role = styled.div`
  display: flex;
  align-items: center;

  label {
    font-size: 1rem;
  }
`;
