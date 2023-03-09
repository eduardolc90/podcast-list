import React from "react";
import { useSelector } from "react-redux";
import { render } from '@testing-library/react';
import { list } from "../mocks/podcastList";
import ChapterListPage from "../../pages/ChapterListPage";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

const mockAppState = {
  podcastData: list,
};

describe("ChapterListPage", () => {
  beforeEach(() => {
    useSelector.mockImplementation((callback) => callback(mockAppState));
  });

  it("should render ChapterListPage", () => {
    const { container } = render(<ChapterListPage id={"asd"} />);
    expect(container.getElementsByClassName("chapter-list-page").length).toBe(1);
  });

});