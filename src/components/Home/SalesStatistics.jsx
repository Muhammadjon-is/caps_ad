import React from "react";
import Iframe from "react-iframe";

const SaleStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Sale statistics</h5>
          <Iframe 
          styles={{
            background:"#FFFFFF",
            border:"none",
            borderRadius:"2px",
            boxShadow:" 0 2px 10px 0 rgba(70, 76, 79, .2)",
            width:"640px",
            height:"480px"
          }}
          src="https://charts.mongodb.com/charts-laptopcaps-vplox/embed/charts?id=64190428-a880-4335-8f2f-59bd11c78538&maxDataAge=3600&theme=light&autoRefresh=true"/>
        </article>
      </div>
    </div>
  );
};

export default SaleStatistics;
