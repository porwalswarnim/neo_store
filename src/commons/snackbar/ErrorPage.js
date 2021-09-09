import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const ErrorPage = () => {
  const history = useHistory();
  return (
    <Grid
      container
      justify="center"
      style={{ marginTop: "30px", cursor: "pointer" }}
    >
      <img
        style={{ width: "60%" }}
        onClick={() => history.push("/home")}
        src="/ErrorImage.jpg"
        alt="image"
      />
    </Grid>
  );
};

export default ErrorPage;

// body {
//     background: #dedede;
// }
// .page-wrap {
//     min-height: 100vh;
// }
