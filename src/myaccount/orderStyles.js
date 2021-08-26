import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    MainGrid: {
        borderTop: "1px solid #71606026",
        marginTop:'30px',
      },
      RightSideBarCSS: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      boxCSS: {
        borderRadius: "5px",
        marginTop: "30px",
        marginLeft: "45px",
        width: "90%",
        padding: "10px",
        fontSize: "30px",
        borderColor: "transparent",
      },
      image: {
        backgroundImage: "url(/homelandscapeimage.jpg)",
        backgroundColor: "white",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        width: "20%",
        height: "15vh",
        margin: "20px 15px",
      },
      imageBox:{
        borderBottom: "1px solid #71606026",
        borderTop: "1px solid #71606026",
      },
      buttonInvoiceDownload:{ 
          margin: "30px 0px 10px 15px",
           fontWeight: "bold",
         },
         transitTypography:{
            fontSize: "20px",
            fontWeight: "bold",
            marginLeft: "15px",
          },
}));
