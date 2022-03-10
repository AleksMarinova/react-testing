import CommentBox from 'components/CommentBox';
import React from 'react';
import { mount } from 'enzyme';

it('has a text area and a button', () => {
  const wrapped = mount(<CommentBox />);
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
})