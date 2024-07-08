import Layout from "@/components/Layout";
import useSWR from "swr";
import GlobalStyle from "../styles";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
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
