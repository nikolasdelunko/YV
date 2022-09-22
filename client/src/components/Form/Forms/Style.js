import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  boxSkills: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    width: "70%",
  },
  btn: {
    position: "absolute",
    padding: "35px 0px",
    backgroundColor: "#1d1d1d",
    transformOrigin: "center",
    color: "#2036FF !important",
    border: "1px solid #2036FF !important",
    "&:hover": {
      color: "#FF2055 !important",
      border: "1px solid #FF2055 !important",
    },
  },
  main: {
    // margin: "200px 50px",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  mainUpload: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid white",
		padding: '10px',
		maxWidth: "30%",
  },
	boxUpload: {
		display: 'flex',
    justifyContent: 'space-around',
	},
  boxProjects: {
    gap: "5px",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  inputGroupActive: {
    border: "3px solid #ff0000",
    padding: "10px",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
  },
  btnUpload: {
    opacity: 0,
    height: 0,
    width: 0,
    lineHeight: 0,
    overflow: "hidden",
    padding: 0,
    margin: 0,
    // visability: "hidden",
    // "&::before": {
    // 	content: "Select photo to main",
    // 	color: "black"
    // }
  },
}));
