import React from 'react'
import { Link, browserHistory } from 'react-router'

export default function App({ children }) {
  return (
    <div>
      <header>
        {' '}
        <Link to="/">Home</Link>
        {' '}
        <Link to="/About">About</Link>
      </header>
      <div style={{ marginTop: '1.5em' }}>{children}</div>
    </div>
  )
}
// <div>
//   <button onClick={() => browserHistory.push('/foo')}>Go to /foo</button>
// </div>
