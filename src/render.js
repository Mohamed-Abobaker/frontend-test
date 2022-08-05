import { render, act } from '@testing-library/react'

export const renderAct = async (component) => {
  let wrapper
  await act(async () => {
    wrapper = render(component)
  })
  return wrapper
}
