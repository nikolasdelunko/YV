import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(theme => ({
    textHead: {  
        display: 'flex',
        fontStyle: 'normal',
        fontSize: '48px',
        textTransform: 'uppercase',
        padding: '100px 0px 0px 10%',
        fontWeight: 'bolder !important',
        lineHeight: '110%',
        paddingTop: '15px',
        paddingBottom: '50px',
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
    },
    main: {
    margin: "200px 50px",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    }

}))