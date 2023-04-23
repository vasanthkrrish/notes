import { type NextPage } from "next";

import { api } from "~/utils/api";
import Header from "./components/Header";

const Home: NextPage = () => {
  return (
    <>
      <main>
        <Header />
      </main>
    </>
  );
};

export default Home;
