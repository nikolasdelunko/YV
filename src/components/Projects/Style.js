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
        // justifyContent: 'center',
    },
    father: {
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
    textH: {
        padding: '35px 0px 0px 8px' ,
    },
    textEl: {
         padding: '35px 0px 35px 16px',
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
        transform: "translate(85%, -50%)",
        color: '#2036FF !important',
        border: '1px solid #2036FF !important',
        "&:hover": {
            color: "#FF2055 !important",
            border: '1px solid #FF2055 !important',
        }

    },textHead: {  
        paddingTop: '100px',
        display: 'flex',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '48px',
        textTransform: 'uppercase',
    }, projects: {
        margin: '0 0 0 10%',
    }
}))