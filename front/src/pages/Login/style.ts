import styled from "styled-components";
import contact from "../../assets/contact.jpg";

export const Container = styled.main`
  display: flex;
  height: 100vh;
`;

export const ContactImg = styled.img`
  height: 100%;
  width: 100%;
  background-image: url(${contact});
`;
