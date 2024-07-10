import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";

export default function ArtPiecePreview({ artPiece, onToggleFavorite }) {
  return (
    <>
      <Link href={`/art-pieces/${artPiece.slug}`}>
        <ImageContainer>
          <StyledImage
            src={artPiece.imageSource}
            alt={artPiece.imageSource}
            fill
          />
        </ImageContainer>
      </Link>
      <FavoriteButton artPiece={artPiece} onToggleFavorite={onToggleFavorite} />
      <h2>{artPiece.name}</h2>
      <h3>{artPiece.artist}</h3>
    </>
  );
}

const ImageContainer = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;
