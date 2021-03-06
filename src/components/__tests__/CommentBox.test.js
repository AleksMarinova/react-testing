import CommentBox from "components/CommentBox";
import React from "react";
import { mount } from "enzyme";
import Root from "../../Root";

let wrapped;

beforeEach(() => {
  wrapped = mount(<Root>
    <CommentBox />
  </Root>);
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text area and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

describe("the text area", () => {
  beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
      target: { value: "new comment" },
    });
    wrapped.update();
  });

  it("users can enter input into text area", () => {
    //retreive prop values
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  it("text area clears on submit", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
    wrapped.find("form").simulate("submit");
    wrapped.update();
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
