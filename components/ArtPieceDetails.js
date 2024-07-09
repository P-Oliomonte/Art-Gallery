import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <>
      <ImageContainer>
        <StyledImage src={image} alt={title} fill />
      </ImageContainer>
      <h2>
        {title} – {year}
      </h2>
      <h3>{artist}</h3>
      <h3>{genre}</h3>
      <StyledLink href="../art-pieces">Back to list </StyledLink>
    </>
  );
}

const ImageContainer = styled.div`
  position: relative;
  width: 600px;
  height: 600px;
`;

const StyledImage = styled(Image)`
  object-fit: contain;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 15px;
  background-color: lightcoral;
  color: white;
  text-decoration: none;
  margin-top: 20px;
`;
