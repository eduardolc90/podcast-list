import React from "react";
import { render, fireEvent, screen } from '@testing-library/react';
import PodCastDescription from "../../../components/podcast-description/PodCastDescription";
import { podcastDetail } from "../../mocks/podcastDetail";

describe("PodCastDescription", () => {
  it("should render PodCastDescription", () => {
    const { container } = render(<PodCastDescription detail={podcastDetail} />);
    expect(container.getElementsByClassName('podcast-detail-container-description').length).toBe(1);
  });

  it("should map info for the component", () => {
    render(<PodCastDescription detail={podcastDetail} />);
    const imName = screen.getByText(podcastDetail["im:name"].label);
    expect(imName).toBeInTheDocument();

    const summary = screen.getByText(podcastDetail.summary.label);
    expect(summary).toBeInTheDocument();
  });
});