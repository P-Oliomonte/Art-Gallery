import Layout from "@/components/Layout";
import useSWR from "swr";
import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "artPiecesInfo",
    {
      defaultValue: [],
    }
  );

  console.log("HÄH?", artPiecesInfo);

  function handleToggleFavorite(slug) {
    const updatedArtPieceInfo = artPiecesInfo.map((artPieceInfo) => {
      if (artPieceInfo.slug === slug) {
        return { ...artPieceInfo, isFavorite: !artPieceInfo.isFavorite };
      }
      return artPieceInfo;
    });

    const existingPieceIndex = artPiecesInfo.findIndex(
      (artPieceInfo) => artPieceInfo.slug === slug
    );

    if (existingPieceIndex === -1) {
      setArtPiecesInfo([...artPiecesInfo, { slug: slug, isFavorite: true }]);
    } else {
      setArtPiecesInfo(updatedArtPieceInfo);
    }
  }

  const {
    data: artPieces,
    isLoading,
    error,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  if (isLoading || !artPieces) return <h1>Loading...</h1>;
  if (error) return <h1>An error occured during fetching</h1>;

  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component
          {...pageProps}
          artPieces={artPieces}
          onToggleFavorite={handleToggleFavorite}
        />
      </Layout>
    </>
  );
}
