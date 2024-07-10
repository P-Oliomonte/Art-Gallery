import Image from "next/image";

export default function FavoriteButton({ artPiece, onToggleFavorite }) {
  return (
    <button type="button" onClick={() => onToggleFavorite(artPiece.slug)}>
      <Image
        src="../images/heart.svg"
        alt="Heart Image"
        width={20}
        height={20}
      />
    </button>
  );
}
