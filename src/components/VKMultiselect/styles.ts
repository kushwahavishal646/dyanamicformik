import theme from "../../config/theme";

const useStyles = () => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
    display: "flex",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
});

export default useStyles;
