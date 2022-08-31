import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(theme => ({
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