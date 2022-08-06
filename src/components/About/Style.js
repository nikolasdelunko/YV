import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(theme => ({
    textHead: {  
        display: 'flex',
        fontStyle: 'normal',
        fontSize: '48px',
        textTransform: 'uppercase',
        padding: '100px 0px 0px 8px',
        fontWeight: 'bolder !important',
        lineHeight: '110%',
        paddingTop: '15px',
        // fontSize: '48px',
        paddingBottom: '50px',
    },
    box: {
        width:'50%',
        padding: '10px ',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    text: {  
        padding: '15px 5px 0 5px',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize:' 48px',
        display: 'flex',
    },
    textBox: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    textBlock: {
        display: 'flex',
        justifyContent: 'center',
    },
    father: { 
        margin: '0 0 0 10%',
        display: 'flex',
        flexDirection: 'column',
    
},
}))