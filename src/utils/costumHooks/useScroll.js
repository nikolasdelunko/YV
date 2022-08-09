import {useNavigate} from 'react-router-dom'
import {useDispatch} from "react-redux"
import {openAbout} from '../../store/helpers/helpersSlice'

const useScroll = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const scrollHendler = (num) => {
     navigate('/')
     window.scrollTo({
       top: num,
       behavior: "smooth"
   });
   dispatch(openAbout(false))
   }
   return {scrollHendler}
}

export default useScroll;