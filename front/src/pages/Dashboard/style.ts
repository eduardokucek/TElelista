import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;

  header {
    display: flex;
    flex-direction: column;
    width: 100px;
    padding: 2.5rem 1rem;
    align-items: center;
    justify-content: space-between;
    background-color: #b1e5f4;

    button {
      height: 50px;
      width: 50px;
      border-radius: 50px;
      font-weight: bold;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    gap: 20px;

    h3 {
      text-align: left;
      padding: 2rem;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  background-color: var(--color-blue-400);
  height: 100%;
  width: 100%;
  list-style: none;
  padding: 2rem;

  li > span {
    font-size: 18px;
  }
`;
