import React from "react";

const ChapterDetail = ({ chapter = {} }) => {
  return (
    <div className="col-8 offset-1 podcast-chapter-container">
      <p>{chapter.collectionName}</p>
      <p>{chapter.shortDescription}</p>
      {chapter.previewUrl && <audio controls>
        <source src={chapter.previewUrl} type="audio/ogg" />
      </audio>}
    </div>
  );

}
export default ChapterDetail;