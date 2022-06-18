import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(theme => ({
    mainBox: {
        display: 'flex',
        margin: '10%',
        margin: '128px 20% 0 10%',
    },
    photoBox: {
        marginLeft: '10%',
    },
    textEl: {
    padding: '35px 0px',
    },
    text: {
        textAlign: 'left',
    },
    photo : {
        width: "100%",
        height: '80%',
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

    }
}))