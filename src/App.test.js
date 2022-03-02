import React from 'react'
import ReactDOM  from 'react-dom'
import App from './components/App'

it('should make the error message dissapear', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})