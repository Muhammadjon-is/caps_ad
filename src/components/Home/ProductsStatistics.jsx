import React from "react";
import Iframe from "react-iframe";
const ProductsStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Products statistics</h5>
          <Iframe 
          styles={{
            background:"#FFFFFF",
            border:"none",
            borderRadius:"2px",
            boxShadow:" 0 2px 10px 0 rgba(70, 76, 79, .2)",
            width:"640px",
            height:"480px"
          }}
          src="https://charts.mongodb.com/charts-laptopcaps-vplox/embed/charts?id=64190732-e448-4da6-8397-db32fc019dc3&maxDataAge=3600&theme=light&autoRefresh=true"/>
        </article>
      </div>
    </div>
  );
};

export default ProductsStatistics;
