import React from "react";
import { render } from '@testing-library/react';
import Header from "../../../components/header/Header";

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe("Header", () => {
  it("should render Header", () => {
    const { container } = render(<Header />);
    expect(container.getElementsByClassName("header-container").length).toBe(1);
  });
});