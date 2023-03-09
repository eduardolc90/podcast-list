import React from "react";
import { useSelector } from "react-redux";
import { render } from '@testing-library/react';
import PodcastDetailsPage from "../../pages/PodcastDetailsPage";
import { list } from "../mocks/podcastList";

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

describe("PodcastDetailsPage", () => {
  beforeEach(() => {
    useSelector.mockImplementation((callback) => callback(mockAppState));
  });

  it("should render PodcastDetailsPage", () => {
    const { container } = render(<PodcastDetailsPage id={"asd"} />);
    expect(container.getElementsByClassName("podcast-chapter-container").length).toBe(1);
  });

});