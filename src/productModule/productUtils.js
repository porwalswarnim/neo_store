import Box from "@material-ui/core/Box";
import { useStyles } from "./productModuleStyles";

export const BOX_ALLPRODUCT = (props) => {
    const classes = useStyles();

    return (
        <Box
        boxShadow={10}
        className={classes.boxCSS}
      >
        All Products
      </Box>
    )
  };
  