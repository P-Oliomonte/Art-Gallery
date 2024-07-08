import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <nav>
      <LinkContainer>
        <Link href="./">Home</Link>
        <Link href="./art-pieces">Artwork List</Link>
      </LinkContainer>
    </nav>
  );
}

const LinkContainer = styled.div`
  padding: 20px;
  display: flex;
  gap: 1rem;
`;
