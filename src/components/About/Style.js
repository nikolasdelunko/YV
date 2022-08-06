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
    link: {
        textDecoration: 'none',
        textAlign: 'center',
    },
    boxCard: {
    paddingTop: '200px',
    },
    conteinerCard: {
        paddingLeft: '10%',
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
    mainCard: { 
        width: '460px',
        height: '238px',
        left: '100px',
        top: '850px',
        background: '#1D1D1D',
        boxShadow: '0px 3px 3px 3px rg',
    
},
    cardTextUp: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '28px 10% 0',
},
    cardTextDuwn: {
        margin: '26px 0 0 10%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
},
    cardItems: {
        display: "flex",
        flexWrap: "wrap"
    },
    textH: {
        fontStyle: 'normal',
        letterSpacing: '0.03em',
        textTransform: 'uppercase',
        color: "#C8CAD6",
        fontWeight: '500 !important',
    },
    textLink: {
        color: '#AFA9A9',
        textDecorationLine: 'underline',
        fontSize: '16px',
    },
    textSpec: {
        color: '#787878',
        fontSize: '18px !important',
        fontWeight: '500 !important',
    },
    textYear: {
        color: '#FFFFFF',
        fontWeight: "400 !important",
        fontSize: '20px !important',
    }
}))