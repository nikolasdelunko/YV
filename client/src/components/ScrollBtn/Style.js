import { makeStyles } from '@mui/styles'

 export const useStyles = makeStyles(theme => ({
    button: {
        position: 'fixed',
        left: '80%',
        bottom: '150px',
        padding: '0 6px',
        fontSize: '2.8rem',
        zIndex: 20,
        cursor: 'pointer',
        color:'#868686',
    },
    text: {
        fontFamily: 'Gilroy',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '20px !important',
        textAlign: 'center',
        "&:after": {
            content: '" "',
            display: 'block',
            height: '1px',
            background: '#868686',
          }
    }
}))