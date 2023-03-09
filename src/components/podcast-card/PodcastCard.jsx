import React from "react";
import { useHistory } from "react-router-dom";

const PodcastCard = ({ podcasts }) => {
  const history = useHistory();
  return (
    <div className=" col-md-3 col-12 podcasts-card-container" onClick={() => history.push(`/podcast/${podcasts.id.attributes["im:id"]}`)}>
      <div className="podcasts-card-container-card">
        <img className="card-img-tops podcasts-card-container-card__img" alt="img" src={podcasts["im:image"][0].label} />
        <div className="card-body">
          <h5 className="card-title">{podcasts.title.label}</h5>
          <p className="card-text">{podcasts["im:artist"].label}</p>
        </div>
      </div>
    </div>
  );
}

export default PodcastCard;