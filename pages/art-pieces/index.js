import ArtPiecePreview from "@/components/ArtPiecePreview";

export default function ArtPieces({ artPieces }) {
  return (
    <>
      {artPieces.map((artPiece) => {
        return <ArtPiecePreview key={artPiece.slug} artPiece={artPiece} />;
      })}
    </>
  );
}
