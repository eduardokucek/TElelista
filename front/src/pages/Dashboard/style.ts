import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;

  header {
    display: flex;
    flex-direction: column;
    width: 10rem;
    padding: 2.5rem 1rem;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-blue-700);

    button {
      height: 50px;
      width: 50px;
      border-radius: 50px;
    }
  }

  main {
    display: flex;
    width: 100vw;
    gap: 20px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  background-color: var(--color-blue-400);
  height: 100vh;
  width: 100vw;
  list-style: none;
`;
