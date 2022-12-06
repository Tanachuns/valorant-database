import React from "react";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div id="pnf" className="container">
      <div className="p404 box">
        <img
          src="https://media2.giphy.com/media/l0HehB8QWj2iRwY8g/giphy.gif?cid=ecf05e476zdqo90rim51jgmqp0ytpbvuljf4lyeb45at9mjb&rid=giphy.gif&ct=g"
          alt="404"
          width={300}
        />
        <h1>404</h1>
        <p>Not Found</p>
      </div>
    </div>
  );
};

export default PageNotFound;
