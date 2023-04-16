import { useCallback, useMemo, useState } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router/routerConfig'
import { MyContext } from './MyContext'
import Header from './components/Header/Header'
import { GlobalStyle } from './style'
import useWindowSize from './hooks/isDesktop'
import { updateDesktop } from '@/redux/reducer'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './style'
import ToastContainer from './components/Toast/ToastContainer'
import MessageContainer from './components/Message/MessageContainer'

import React from 'react'
import { ConfigProvider } from 'antd'
import { LoadingProvider } from './components/Loading'
import { useAppDispatch, useAppSelector } from './hooks'
const App = () => {
  const element = useRoutes(routes)
  const size = useWindowSize()
  const [Name, setName] = useState('Im jelly')
  const dispatch = useAppDispatch()
  const isDesktop = useAppSelector((state: { app: { isDesktop: boolean } }) => state.app.isDesktop)
  const isDark = useAppSelector((state: { app: { isDark: boolean } }) => state.app.isDark)

  useMemo(() => {
    dispatch(updateDesktop(size.isDesktop))
  }, [dispatch, size.isDesktop])

  const getTheme = useCallback(() => {
    return { ...defaultTheme, isDesktop, isDark }
  }, [isDesktop, isDark])

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#F95997',
        },
      }}
    >
      <MyContext.Provider value={{ Name, setName }}>
        <ThemeProvider theme={getTheme()}>
          <LoadingProvider>
            <GlobalStyle />
            <Header />
            {element}
            <ToastContainer />
            <MessageContainer />
          </LoadingProvider>
        </ThemeProvider>
      </MyContext.Provider>
    </ConfigProvider>
  )
}

export default App
