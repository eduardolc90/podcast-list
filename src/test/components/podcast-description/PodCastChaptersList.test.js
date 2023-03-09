import React from "react";
import { render, fireEvent, screen } from '@testing-library/react';
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

  it("should call navigate", () => {
    const history = {
      push: jest.fn(),
    };
    render(<PodCastChaptersList chaptersList={chapterList} history={history} />);
    fireEvent.click(screen.getByText(chapterList.results[0].trackName));
    expect(history.push).toHaveBeenCalled();
  });
});