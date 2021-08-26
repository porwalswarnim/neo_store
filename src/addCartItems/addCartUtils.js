import { Typography } from "@material-ui/core";


export const REVIEW_ORDER_TYPOGRAPHY = () => {
    return (
        <Typography
        component="h1"
        variant="h4"
        style={{
          marginTop: "20px ",
          marginLeft: "30px",
          fontSize: "40px",
          fontWeight: "500",

        }}
      >
        Review Order
      </Typography>
    );
  };
  
export const REVIEW_ORDER_LEFTSIDE_TYPOGRAPHY = () => {
    return (
        <div>
        <Typography
          style={{
            paddingLeft: "30px",
            paddingTop: "20px",
            paddingBottom:'20px',
            fontSize: "25px",
            borderBottom: "1px solid #71606026",
          }}
        >
          Subtotal
        </Typography>
        <Typography
          component="h1"
          variant="h4"
          style={{
            paddingLeft: "30px",
            paddingTop: "20px",
            paddingBottom:'20px',
            fontSize: "25px",
            borderBottom: "1px solid #71606026",
            
          }}
        >
          GST (5%)
        </Typography>
        <Typography
          component="h1"
          variant="h4"
          style={{
            paddingLeft: "30px",
            paddingTop: "20px",
            paddingBottom:'20px',
            fontSize: "25px",
            borderBottom: "1px solid #71606026",
          }}
        >
          Order Total
        </Typography>
        </div>
    );
  };
  