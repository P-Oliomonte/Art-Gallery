import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function Spotlight({ randomArtPiece }) {
  return (
    <>
      {/* <Link href={randomArtPiece.slug}> */}
      <ImageContainer>
        <StyledImage
          src={randomArtPiece.imageSource}
          alt={randomArtPiece.imageSource}
          layout="fill"
        />
      </ImageContainer>
      <h3>{randomArtPiece.artist}</h3>
      {/* </Link> */}
    </>
  );
}

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;
