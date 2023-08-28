import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.beige};
  padding: 3rem 2rem;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 720px) {
    padding: 2rem 1rem;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  min-height: 80vh;
`;
