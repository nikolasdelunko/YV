import { makeStyles } from '@mui/styles'


export const useStyles = makeStyles(theme => ({
    btn: {
        transition: '1s',
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
    },
    btnHover: {
        transition: '1s',
        zIndex: '-1',
        position: 'absolute',
        visable: 'hidden',
    },
    main: {
        transition: '1s',
    margin: "200px 50px",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    },
    mainHover: {
        transition: '1s',
        margin: "150px 50px",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    linkName: {
        textDecoration: 'none'
    },
    circle: {
        display: "flex",
        justifyContent: "center",
        flexDirection: 'column',
        transition: '1s',
        width: '250px',
        border: '3px solid #FFFFFF',
        height: '250px',
        background: '#2036FF',
        borderRadius: '50%',
        "&:hover": {
            width: "350px",
            height: "350px",
            background: '#FFFFFF',
            border: '3px solid #2036FF',
          },

    },
    text: {
        transition: '1s',
        color: '#FFFFFF',
    },
    textHover: {
        transition: '1s',
        color: '#2036FF',
    }


}))