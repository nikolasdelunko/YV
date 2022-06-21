import { makeStyles } from '@mui/styles'


export const useStyles = makeStyles(theme => ({
    link: {
        textDecoration: 'none',
        textAlign: 'center',
    },
    mainSec: {
        display: 'flex',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
//         gap: '50px',
//         "&:hover": {
//             gap: '0px',
// },
        // justifyContent: 'center',
    },
    father: {
        transition: '1s',
        overflow:'hidden',
        marginTop: '96px',
        width: '440px',
        height: '336px',
        padding: "0 25px 0 0", 
        "&:hover": {
          width: "541px",
          height: "424px",
          padding: "0",
          margin: '35px 0 0 -25px'
        },
        // '& > :not(style)': {
        //   m: 1,
        //   width: 440,
        //   height: 336,
        // },
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
        maxWidth:'100%',
        height: '100%',
        objectFit: 'cover',
    },
    mainBox: {
        position: 'relative',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
                "&:hover": {
                    // border: '9px solid black'
        },
        
    },
    btn: {
        position: 'absolute',
        padding: '35px 0px',
        backgroundColor: '#1d1d1d',
        transformOrigin: "center",
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