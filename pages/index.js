import useSWR from "swr";
import Image from "next/image";
import styled from "styled-components";
import ArtPiecePreview from "@/components/ArtPiecePreview";
import Spotlight from "@/components/Spotlight";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function HomePage() {
  const {
    data: artPieces,
    isLoading,
    error,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  if (isLoading || !artPieces) return <h1>Loading...</h1>;
  if (error) return <h1>An error occured during fetching</h1>;

  const randomArtPiece =
    artPieces[Math.floor(Math.random() * artPieces.length)];

  console.log(artPieces);

  // const randomArtPiece = getRandomArtPiece(artPieces);

  // function getRandomArtPiece(pieces) {
  //   const randomIndex = Math.floor(Math.random() * pieces.length);
  //   return pieces[randomIndex];
  // }

  return (
    <div>
      <h1>Sylvies Lauras and Phillips Beautiful Art Gallery</h1>
      <Spotlight randomArtPiece={randomArtPiece} />
      {artPieces.map((artPiece) => {
        return <ArtPiecePreview key={artPiece.slug} artPiece={artPiece} />;
      })}
    </div>
  );
}
