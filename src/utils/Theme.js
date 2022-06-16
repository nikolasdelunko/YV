import { createTheme } from '@mui/material/styles'
import Gilroy from './fonts/Gilroy-Light.ttf'


const theme = createTheme({
    breakpoints: {
        keys: ['xs', 'sm', 'md', 'l', 'lg', 'xl'],
        values: {
            xl: 1440,
            lg: 1180,
            l: 850,
            md: 768,
            sm: 480,
            xs: 320,
        },
    },
    // palette: {
    //     primary: { main: '#1d1d1d' , dark:'#2b3233' , light:'rgba(25,59,103,0.05)' },
    //     secondary: { main: '#5C5E60' },
    //     neutral: {
    //         main: '#fff',
    //         contrastText: '#fff',
    //     },
    // },
    palette: {
        type: 'dark',
        primary: {
          main: '#ffffff',
          dark:'#1d1d1d',
        },
        secondary: {
          main: '#f50057',
        },
        background: {
          default: '#1d1d1d',
          paper: '#1D1D1D',
        },
        info: {
          main: '#2036FF',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#CCCCD5',
        },
      },
    typography: {
        fontFamily: Gilroy,
        fontSize: 17,
    
    },
    shape: {
        borderRadius: 0,
      },
})

export default theme
