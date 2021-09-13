
import Typography from "@material-ui/core/Typography";
export const REGISTER_HEADING = (props) =>{
    return(
      <div>
       <Typography component="h1" variant="h4" style={{ marginTop: "10px" }}>
          Register to NeoSTORE
        </Typography>
                </div>
    )
  }

  export const MAX_100_KEYWORD = (props) =>{
    return(
        <Typography
        style={{
          textAlign: "left",
          fontSize: "small",
          marginLeft: "15px",
        }}
      >
        Max 10 characters
      </Typography>
    )
  }