import { makeStyles } from '@mui/styles'


export const useStyles = makeStyles(theme => ({
    link: {
        textDecoration: 'none'
    },
    mainSec: {
        display: 'flex',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: '50px',
        justifyContent: 'center',
    },
    father: {
        width: 440,
        height: 336,

        // display: 'flex',
        // // flexWrap: 'wrap',
        marginTop: '96px',
        // "&:hover": {
        //   m: 1,
        //   width: 541,
        //   height: 424,
        // },
        '& > :not(style)': {
          m: 1,
          width: 440,
          height: 336,
        },
    },
    textEl: {
    padding: '35px 0px',
    },
    text: {
        textAlign: 'left',
    },
    photo: {
        width: '442px',
        height: '182px',
        // width: '100%',
        objectFit: 'cover',
    },
    mainBox: {
        position: 'relative',
        textAlign: 'left',
    },
    btn: {
        position: 'absolute',
        padding: '35px 0px',
        backgroundColor: '#1d1d1d',
        transformOrigin: "center",
        transform: "translate(100%, -50%)",
        color: '#2036FF !important',
        border: '1px solid #2036FF !important',
        "&:hover": {
            color: "#FF2055 !important",
            border: '1px solid #FF2055 !important',
        }

    }
}))