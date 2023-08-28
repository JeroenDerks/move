import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

export const StyledLink = styled(Link)`
  background: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  border-radius: 50%;
  padding: 0.5rem;
  text-decoration: none;
  align-items: center;
  justify-content: center;
`;
