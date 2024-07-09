import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import FavoriteButton from "@/components/FavoriteButton";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  slug,
}) {
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
      <FavoriteButton onClick={() => onToggleFavorite(slug, isFavorite)} />
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
  display: block;
  width: 150px;
  text-align: center;
  padding: 15px;
  background-color: lightcoral;
  color: white;
  text-decoration: none;
  margin-top: 20px;
`;
