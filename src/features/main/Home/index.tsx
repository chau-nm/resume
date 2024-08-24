import { FC } from "react";
import Header from "./Header";
import Body from "./Body";

const Home: FC = () => {
  return (
    <div id="home" style={{ height: "100vh" }}>
      <Header />
      <Body />
    </div>
  );
};

export default Home;
