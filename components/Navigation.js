import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <StyledNavigation>
      <Link href="/">Home</Link>
      <Link href="/art-pieces">Artwork List</Link>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  padding: 20px;
  display: flex;
  gap: 1rem;
`;
