import CommentBox from 'components/CommentBox';
import React from 'react';
import { mount } from 'enzyme';

let wrapped;

beforeEach(() =>{
wrapped = mount(<CommentBox />);
})

afterEach(() => {
  wrapped.unmount();
})

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
})

it('users can enter input into text area', () => {
  const textarea = wrapped.find('textarea');
  textarea.simulate('change', {
    target: { value: 'new comment' }
  });
  expect(wrapped.state('comment')).toEqual('new comment');
})