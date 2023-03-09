import React from "react";
import { render } from '@testing-library/react';
import ChapterDetail from "../../../components/podcast-description/ChapterDetail";
import PodCastChaptersList from "../../../components/podcast-description/PodCastChaptersList";
import { chapterList } from "../../mocks/chapterList";

describe("PodCastChaptersList", () => {
  it("should render PodCastChaptersList", () => {
    const { container } = render(<PodCastChaptersList chaptersList={chapterList} />);
    expect(container.getElementsByClassName('podcast-chapter-container').length).toBe(1);
  });

  it("should render chapterList", () => {
    const { container } = render(<PodCastChaptersList chaptersList={chapterList} />);
    expect(container.getElementsByClassName('podcast-chapter-container__element').length).toBe(chapterList.resultCount);
  });
});