import Image from "next/image";
import Link from "next/link";

export default function ArtPiecePreview({ artPiece }) {
  return (
    <Link href={artPiece.slug}>
      <Image
        src={artPiece.imageSource}
        alt={artPiece.imageSource}
        width={artPiece.dimensions.width / 10}
        height={artPiece.dimensions.height / 10}
      />
      <h2>{artPiece.name}</h2>
      <h3>{artPiece.artist}</h3>
    </Link>
  );
}
