import styled from "styled-components";
import Link from "next/link";

export const StyledLink = styled(Link)`
  background: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  border-radius: 50%;
  padding: 0.5rem;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  width: max-content;
`;
