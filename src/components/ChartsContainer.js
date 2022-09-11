import { useState } from "react";
import { useSelector } from "react-redux";
import Wrapper from "../assets/css_structures/ChartsContainer";
import AreaChart from "./AreaChart";
import BarChart from "./BarChart";

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { applications: data } = useSelector((state) => state.allJobs);
  return (
    <Wrapper>
      <h4>Monthly applications</h4>
      <button
        type="button"
        onClick={() => {
          setBarChart(!barChart);
        }}
      >
        {barChart ? "Area Chart" : "Bar Chart"}
      </button>
      {barChart ? <BarChart date={data} /> : <AreaChart date={data} />}
    </Wrapper>
  );
};

export default ChartsContainer;
