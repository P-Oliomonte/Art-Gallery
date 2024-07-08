import Image from "next/image";
import Link from "next/link";

export default function Spotlight({ randomArtPiece }) {
  return (
    <Link href={randomArtPiece.slug}>
      <Image
        src={randomArtPiece.imageSource}
        alt={randomArtPiece.imageSource}
        width={randomArtPiece.dimensions.width / 2}
        height={randomArtPiece.dimensions.height / 2}
      />
      <h3>{randomArtPiece.artist}</h3>
    </Link>
  );
}
