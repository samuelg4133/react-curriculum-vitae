import React from "react";
import profilePhoto from "../../assets/profile.jpg";
import { Container, Profile, ProfilePhoto, Role } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <ProfilePhoto>
        <img src={profilePhoto} alt="Profile" />
      </ProfilePhoto>
      <Profile>
        <div>
          <label htmlFor="name">Samuel</label>
          <label htmlFor="lastname">Gomes Vieira</label>
        </div>
        <Role>
          <label htmlFor="role">Programador</label>
        </Role>
      </Profile>
    </Container>
  );
};

export default Header;
