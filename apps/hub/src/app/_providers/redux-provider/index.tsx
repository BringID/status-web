import { Provider as ReduxProvider } from 'react-redux'

import store from '../../store'

import type TProps from './types'

export const ReduxStoreProvider: React.FC<TProps> = ({ children }) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>
}

export default ReduxStoreProvider
