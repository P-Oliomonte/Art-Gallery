import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceDetails";

export default function ArtPieceDetailsPage({ artPieces }) {
  const router = useRouter();
  const { slug } = router.query;

  console.log(artPieces);

  const artPieceDetail = artPieces.find((artPiece) => artPiece.slug === slug);

  console.log(artPieceDetail);

  return (
    <ArtPieceDetails
      image={artPieceDetail.imageSource}
      title={artPieceDetail.name}
      artist={artPieceDetail.artist}
      year={artPieceDetail.year}
      genre={artPieceDetail.genre}
    />
  );
}
