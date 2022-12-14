import React from "react";
import axios from "axios";
import Loading from "../Loading/Loading";
import "./Maps.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
/* eslint-disable react-hooks/exhaustive-deps */

const Maps = (props) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [mapList, setMapList] = React.useState([]);

  React.useEffect(() => {
    props.setPage(4);
    axios
      .get("https://valorant-api.com/v1/maps")
      .then((response) => {
        setMapList(response.data.data);
      })
      .then(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2500);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const maps = mapList.map((item, index) => {
    return (
      <div key={index}>
        <img src={item.splash} alt={item.displayName} />
        <p className="legend">{item.displayName}</p>
      </div>
    );
  });

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div className="container">
        <div className="maps box">
          <Carousel>{maps}</Carousel>
        </div>
        <div className="maps-mobile box ">{maps}</div>
      </div>
    );
  }
};

export default Maps;
