import React from "react";
import "./Home.css";
import Menu from "./Menu";
import Loading from "../Loading/Loading";
import axios from "axios";

/* eslint-disable react-hooks/exhaustive-deps */
const Home = (props) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [bundleList, setBundleList] = React.useState([]);
  React.useEffect(() => {
    props.setPage(0);
    axios
      .get(`https://valorant-api.com/v1/bundles`)
      .then((response) => {
        console.log(response.data.data);
        setBundleList(response.data.data);
      })
      .then(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  } else {
    const randImg = () => {
      return Math.floor(Math.random() * bundleList.length);
    };
    console.log(randImg());
    const bundle = bundleList[randImg()];
    return (
      <div className="container home">
        <div className="home-img box">
          <div>
            <h2>Hot Bundle</h2>
            <img src={bundle.displayIcon} alt={bundle.displayName} />
            <p>{bundle.displayName}</p>
          </div>
        </div>
        <Menu />
      </div>
    );
  }
};

export default Home;
