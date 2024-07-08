import ArtPiecePreview from "@/components/ArtPiecePreview";

export default function ArtPieces({ artPieces }) {
  return (
    <>
      <h1>List of all Art Pieces</h1>
      {artPieces.map((artPiece) => {
        return <ArtPiecePreview key={artPiece.slug} artPiece={artPiece} />;
      })}
    </>
  );
}
