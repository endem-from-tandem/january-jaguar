import React from 'react'
import { useSelector } from 'react-redux'
import App from './app'

import { IInitialState } from '../reducers'

const AppContainer: React.FC = () => {
  const theme = useSelector((state: IInitialState) => state.theme)
  return <App theme={theme} />
}

export default AppContainer
