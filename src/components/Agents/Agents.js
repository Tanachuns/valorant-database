import React from "react";
import axios from "axios";
import "./Agent.css";
import AgentDetail from "./AgentDetail";
import AgentButton from "./AgentButton";
import Loading from "../Loading/Loading";

const Agents = (props) => {
  const [agent, setAgent] = React.useState({});
  const [agentList, setAgentList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get("https://valorant-api.com/v1/agents?isPlayableCharacter=true")
      .then((response) => {
        console.log("get");
        setAgent(response.data.data[0]);
        setAgentList(response.data.data);
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
  const agents = agentList.map((item, index) => {
    return (
      <AgentButton index={index} key={index} agent={item} setAgent={setAgent} />
    );
  });
  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div className="container agents">
        <AgentDetail agent={agent} />
        <div className="agents-list box">{agents}</div>
      </div>
    );
  }
};

export default Agents;
