import theme from "../../config/theme";

const useStyles = () => ({
  formControl: {
    margin: theme.spacing(0, 0, 1, 0),
    display: "flex",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  text: {
    fontSize: 12,
    lineHeight: 1.5,
    fontWeight: 400,
    color: theme.palette.text.secondary,
    textAlign: "start",
  },
  error: {
    color: theme.palette.IMError.main,
  },
});

export default useStyles;
