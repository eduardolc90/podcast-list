import React from "react";
import { useSelector } from "react-redux";
import { render } from '@testing-library/react';
import { list } from "../mocks/podcastList";
import PodcastsListPage from "../../pages/PodcastsListPage";

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

describe("PodcastsListPage", () => {
  beforeEach(() => {
    useSelector.mockImplementation((callback) => callback(mockAppState));
  });

  it("should render PodcastsListPage", () => {
    const { container } = render(<PodcastsListPage id={"asd"} />);
    expect(container.getElementsByClassName("podcasts-list-container").length).toBe(1);
  });
});