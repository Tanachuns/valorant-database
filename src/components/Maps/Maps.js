import React from "react";
import Loading from "../Loading/Loading";

const Maps = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);
  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div className="container">
        <div>gamemode 1</div>
      </div>
    );
  }
};

export default Maps;
