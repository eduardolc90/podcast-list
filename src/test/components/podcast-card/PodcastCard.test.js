import React from "react";
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import { podcastDetail } from "../../mocks/podcastDetail";
import PodcastCard from "../../../components/podcast-card/PodcastCard";

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("PodcastCard", () => {
  it("should render PodcastCard", () => {
    const { container } = render(<PodcastCard podcasts={podcastDetail} />);
    expect(container.getElementsByClassName('podcasts-card-container').length).toBe(1);
  });

  it("should call navigate", () => {
    render(
      <MemoryRouter>
        <PodcastCard podcasts={podcastDetail} />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByText(podcastDetail.title.label));
    expect(mockHistoryPush).toHaveBeenCalled();
  });
});