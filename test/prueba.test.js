import { mount, render, shallow } from "enzyme";
import ChapterDetail from "../src/components/podcast-description/ChapterDetail";
describe("CustomContent", () => {

  it("should render tag wit timeZone", () => {
    const wrapper = shallow(<ChapterDetail />);
  });
});