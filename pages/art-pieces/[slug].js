import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceDetails";
import FavoriteButton from "@/components/FavoriteButton";

export default function ArtPieceDetailsPage({ artPieces, onToggleFavorite }) {
  const router = useRouter();
  const { slug } = router.query;

  const artPieceDetail = artPieces.find((artPiece) => artPiece.slug === slug);

  return (
    <>
      <ArtPieceDetails
        artPiece={artPieceDetail}
        image={artPieceDetail.imageSource}
        title={artPieceDetail.name}
        artist={artPieceDetail.artist}
        year={artPieceDetail.year}
        genre={artPieceDetail.genre}
        slug={artPieceDetail.slug}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
