import styled from "styled-components";

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  input {
    height: 26px;
  }

  button {
    margin-top: 1rem;
    height: 26px;
    width: 100%;
  }
`;

export const FormButtons = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  gap: 1rem;

  button {
    margin-top: 1rem;
    height: 26px;
    width: 100%;
  }
`;
