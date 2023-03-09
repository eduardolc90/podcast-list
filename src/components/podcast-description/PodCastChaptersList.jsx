import React from "react";
import { secondsToString, toDateFormat } from "../../utils/date-utils";

const PodCastChaptersList = ({ chaptersList, id, history }) => (
  <div className="col-8 offset-1 podcast-chapter-container">
    <div className="row">
      <div className="col-12 podcast-chapter-container__size">
        <p>{`Episodios: ${chaptersList.resultCount}`}</p>
      </div>
    </div>
    <div className="row">
      <div className="col-6 podcast-chapter-container__table">Title</div>
      <div className="col-3 podcast-chapter-container__table">Date</div>
      <div className="col-3 podcast-chapter-container__table">Duration</div>
    </div>
    {chaptersList.results && chaptersList.results.map((it, index) =>
      <div key={it.trackId} className={`row podcast-chapter-container__element ${index % 2 ? "bg-light" : "bg-custom"}`}>
        <div className="col-6"><a className="link-primary" onClick={() => history.push(`/podcast/${id}/episode/${it.trackId}`)}>{it.trackName}</a></div>
        <div className="col-3">{toDateFormat(it.releaseDate)}</div>
        <div className="col-3">{secondsToString(it.trackTimeMillis)}</div>
      </div>
    )}
  </div>
);
export default PodCastChaptersList;