import useSWR from "swr";
import Image from "next/image";
import styled from "styled-components";
import ArtPiecePreview from "./components/ArtPiecePreview.js";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function HomePage() {
  const {
    data: artPieces,
    isLoading,
    error,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  if (isLoading || !artPieces) return <h1>Loading...</h1>;
  if (error) return <h1>An error occured during fetching</h1>;

  console.log(artPieces);

  return (
    <div>
      <h1>Sylvies Lauras and Phillips Beautiful Art Gallery</h1>
      {artPieces.map((artPiece) => {
        return <ArtPiecePreview key={artPiece.slug} artPiece={artPiece} />;
      })}
    </div>
  );
}
