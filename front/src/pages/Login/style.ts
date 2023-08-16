import { Link } from "react-router-dom";
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
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  h2 {
    font-weight: bold;
    font-size: 28px;
    margin-bottom: 0.6rem;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 260px;
  width: 300px;
  gap: 1rem;
  border-color: #ffffff;
  background-color: #566ba7;
  border-radius: 4px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0.4rem;

    input {
      height: 26px;
      width: 220px;
      border: none;
      border-radius: 4px;
      padding-left: 0.4rem;
    }
  }

  span {
    margin-bottom: -8px;
  }

  button {
    height: 26px;
    width: 220px;
    border-radius: 4px;
    background-color: #ffffff;
    color: #030027;
  }
`;

export const StyledLink = styled(Link)`
  width: 220px;
  background-color: #ffffff;
  text-align: center;
  line-height: 26px;
  text-decoration: none;
  border-radius: 4px;
  color: #030027;
`;
