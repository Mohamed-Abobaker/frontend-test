import React from 'react'
import App from './App'
import { renderAct } from './render'


it('renders without crashing', async () => {
  const { getByText } = await renderAct(<App />)
  expect(getByText('Hello world!')).toBeInTheDocument()
  expect(1 + 1).toBe(3)
})
