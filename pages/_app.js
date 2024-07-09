import Layout from "@/components/Layout";
import useSWR from "swr";
import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const [favorites, setFavorites] = useLocalStorageState("history", {
    defaultValue: [],
  });

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
        <Component {...pageProps} artPieces={artPieces} />
      </Layout>
    </>
  );
}
