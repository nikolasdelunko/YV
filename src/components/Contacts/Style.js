import { makeStyles } from '@mui/styles'


export const useStyles = makeStyles(theme => ({
    father: { 
        margin: '0 0 0 10%',
        display: 'flex',
        flexDirection: 'column',
    
},
    textHead: {  
        fontWeight: 'bolder !important',
        lineHeight: '110%',
        paddingTop: '15px',
        display: 'flex',
        fontStyle: 'normal',
        // fontSize: '48px',
        paddingBottom: '50px',
        textTransform: 'uppercase',
    },
    text: {  
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize:' 48px',
        paddingTop: '15px',
        display: 'flex',
        textTransform: 'uppercase',
    },
    textBlock: {
        padding: '150px 0 102px 0',
    },
    btn: {
        padding: '15px 65px !important',
        boxShadow:' 0px 3px 3px 3px rgb(0 0 0 / 15%)',
        "&:hover": {
            backgroundColor : "#FF2055 !important",
        }

    },
    btnBox: {
        marginLeft: 'auto',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        gap: '63px',
        paddingBottom: '225px',
    },
    link: {
        textDecoration: 'none',
        textAlign: 'center',
    },
}))