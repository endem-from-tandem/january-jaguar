import { createMuiTheme } from '@material-ui/core'

import { teal } from '@material-ui/core/colors'

const common: any = {
  bp: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl', 'navbar'],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      navbar: 700,
    },
  },
}

const lightTheme = () =>
  createMuiTheme({
    palette: {
      type: 'light',
      primary: teal,
      secondary: {
        main: '#222',
      },
    },
    breakpoints: common.bp,
  })

const darkTheme = () =>
  createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#222',
      },
      secondary: {
        main: '#ebebeb',
      },
      background: {
        paper: '#444',
      },
    },
    breakpoints: common.bp,
  })

export { lightTheme, darkTheme }
