import React from "react";

const PodCastDescription = ({ detail, history, id }) => (
  <div className="col-3  podcast-detail-container-description" onClick={() => history.push(`/podcast/${id}`)}>
    <div className="row">
      <div className="col-12 podcast-detail-container-description__img">
        {detail["im:image"] && <img alt="img" src={detail["im:image"][0].label} width={"100"} />}
      </div>
      < hr />
      <div className="col-12 ">
        {detail["im:name"] && <p className="podcast-detail-container-description__title">{detail["im:name"].label}</p>}
        {detail["im:artist"] && <p className="podcast-detail-container-description__description">by {detail["im:artist"].label}</p>}
      </div>
      <div className="col-12">
        {detail.summary && <p className="podcast-detail-container-description__summary">{detail.summary.label}</p>}
      </div>
    </div>
  </div>
);

export default PodCastDescription;