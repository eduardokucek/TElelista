import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  height: 144px;
  width: 340px;
  margin: 10px;
  padding: 1rem;
  gap: 1rem;
  border-radius: 4px;
  background-color: var(--color-gray-300);
  color: var(--color-gray-900);
`;

export const Data = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  span {
    font-weight: bold;
  }
`;

export const ContactData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const Actions = styled.div`
  display: flex;
  gap: 1rem;

  button {
    height: 26px;
    width: 60px;
  }
`;
