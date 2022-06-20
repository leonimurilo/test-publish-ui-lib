import * as React from 'react'
import {render as rtlRender} from '@testing-library/react'

// Here we can add wrapper components that are always needed

function render(ui, { ...options } = {}) {
  const Wrapper = ({children}) => (
    <>{children}</>
  )
  return rtlRender(ui, {wrapper: Wrapper, ...options})
}

export * from '@testing-library/react'
// override React Testing Library's render with our own
export {render}