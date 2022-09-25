import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openAbout, openBurger } from "../../store/helpers/helpersSlice";

const useScroll = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const scrollHendler = (num, mob) => {
    navigate("/");
    window.scrollTo({
      top: num,
      behavior: "smooth",
    });
		if(mob === true) {
			return dispatch(openBurger(false)) && dispatch(openAbout(false))
		}else{
			return dispatch(openAbout(false))
		}

	
  };

  return { scrollHendler };
};

export default useScroll;
