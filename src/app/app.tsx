import React from 'react'

import { SnackbarProvider } from 'notistack'

import NavbarContainer from '../components/navbar/navbar-c'
import useRoutes from '../routes/routes'
import { lightTheme, darkTheme } from '../material-ui/themes'

import {
  useTheme,
  ThemeProvider,
  makeStyles,
  createStyles,
  Typography,
  Button,
  Box,
  Paper,
  Hidden,
  CssBaseline,
  Container,
} from '@material-ui/core'

interface IApp {
  theme: 'light' | 'dark'
  darkTheme?: any
  lightTheme?: any
}

// Add/remove breackpoints in type
declare module '@material-ui/core/styles/createBreakpoints' {
  interface BreakpointOverrides {
    navbar: true
  }
}

const App: React.FC<IApp> = ({ theme }) => {
  const useStyles = makeStyles(() =>
    createStyles({
      root: {
        minHeight: '101vh',
        paddingTop: 60,
        paddingBottom: '10px',
      },
    })
  )
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme() : lightTheme()}>
      <SnackbarProvider maxSnack={3}>
        <CssBaseline />
        <Paper className={classes.root}>
          <NavbarContainer />
          <Container maxWidth='md'>{useRoutes()}</Container>
        </Paper>
      </SnackbarProvider>
    </ThemeProvider>
  )
}

export default App
