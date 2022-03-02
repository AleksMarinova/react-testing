import React from 'react'
import ReactDOM  from 'react-dom'
import App from '../App'

it('renders comment box', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  expect(div.innerHTML).toContain('Hello, world! I am a CommentBox.')
  ReactDOM.unmountComponentAtNode(div)
}
)

it('renders commentBox', () => {
 
}
)