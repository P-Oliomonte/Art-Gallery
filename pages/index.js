import Spotlight from "@/components/Spotlight";
import ArtPieces from "@/pages/art-pieces";

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
