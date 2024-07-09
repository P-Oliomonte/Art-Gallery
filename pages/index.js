import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({ artPieces }) {
  const randomArtPiece =
    artPieces[Math.floor(Math.random() * artPieces.length)];

  return (
    <div>
      <h1>Sylvies Lauras and Phillips Beautiful Art Gallery</h1>
      <Spotlight randomArtPiece={randomArtPiece} />
    </div>
  );
}
