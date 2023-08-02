import styled from "styled-components";
import loaging from "../../assets/loading.svg";

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.img`
  width: 10px;
  background-image: url(${loaging});
`;
