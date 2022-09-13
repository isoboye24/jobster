import { useState } from "react";
import { useSelector } from "react-redux";
import Wrapper from "../assets/css_structures/ChartsContainer";
import AreaChartComponent from "./AreaChartComponent";
import BarChartComponent from "./BarChartComponent";

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
      {barChart ? (
        <BarChartComponent data={data} />
      ) : (
        <AreaChartComponent data={data} />
      )}
    </Wrapper>
  );
};

export default ChartsContainer;
