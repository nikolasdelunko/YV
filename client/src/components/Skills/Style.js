import { makeStyles } from '@mui/styles'


export const useStyles = makeStyles(theme => ({
    main: {
        margin: '0 0 0 10%',
    },
    textHead: {  
        paddingTop: '100px',
        display: 'flex',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '48px',
        textTransform: 'uppercase',
    },
    boxText: {
        background: '#212121',
    },
    textSkl: {
        boxShadow:' 0px 3px 3px 3px rgb(0 0 0 / 15%)',
        padding: '25px 32px',
        fontSize: '20px',
        color: '#20FF94',
    },
    textBlock: {
        marginTop: '76px',
        width: '80%',
        display: 'flex',
        // justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',
         gap: '32px',
    }
}))