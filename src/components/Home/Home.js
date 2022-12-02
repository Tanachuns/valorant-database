import React from "react";
import "./Home.css";
import Menu from "./Menu";
import Loading from "../Loading/Loading";

const Home = (props) => {
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);
  props.setPage(0);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div className="container home">
        <div className="home-img box">
          <h1>Home</h1>
        </div>
        <Menu />
      </div>
    );
  }
};

export default Home;
