import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(theme => ({
    mainBox: {
        display: 'flex',
        margin: '10%',
        margin: '128px 20% 0 10%',
    },
    photoBox: {
        position: 'absolute',
        visibility: 'hidden',
        ['@media (min-width: 768px)']: {
            position: 'relative',
            visibility: 'visible',
        },
        marginLeft: '10%',
    },
    photoMob: {
        position: 'relative',
        visibility: 'visible',
        ['@media (min-width: 768px)']: {
            position: 'absolute',
            visibility: 'hidden',
        },
        width: "90%",
        height: '30%',
        objectFit: 'cover',
    },
    textMob: {

    },
    textEl: {
    padding: '35px 0px',
    },
    text: {
        textAlign: 'left',
    },
    photo : {
        width: '457px',
        height: '459px',
        objectFit: 'cover',
    },
    btn: {
        padding: '35px 0px',
        color: '#2036FF !important',
        border: '1px solid #2036FF !important',
        "&:hover": {
            color: "#FF2055 !important",
            border: '1px solid #FF2055 !important',
        }

    },
    link: {
        textDecoration: 'none',
        textAlign: 'center',
    },
}))