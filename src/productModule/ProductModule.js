import React from "react";
import Grid from "@material-ui/core/Grid";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import MediaCard from "../card/Card";
import Box from "@material-ui/core/Box";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import { useStyles } from "./productModuleStyles";
import { BOX_ALLPRODUCT } from "./productUtils";

const ProductModule = () => {
  const classes = useStyles();
  const data = [
    {
      id: 1,
      cover:'backgroundfurnitureimage.jpg',
      name: "Furniture Name1",
      amount: "$40000",
      details:'by Swarnim',
    },
    {
      id: 2,
      cover:'backgroundlogin.jpg',
      name: "Furniture Name2",
      amount: "$30000",
      details:'by Rajat',
    },
  ];
  return (
    <div>
      <Header />
      <Grid item container className={classes.mainGrid} row xs={12}>
        <Grid item xs={3}>
          <Grid className={classes.leftProductGrid}>
           <BOX_ALLPRODUCT/>
            <TreeView
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
            >
              <Box boxShadow={10} className={classes.boxCSS}>
                <TreeItem
                  nodeId="1"
                  label="Categories"
                  classes={{ label: classes.label }}
                >
                  <TreeItem
                    nodeId="2"
                    className={classes.treeItemCSS}
                    label="Bed"
                  />
                  <TreeItem
                    nodeId="3"
                    className={classes.treeItemCSS}
                    label="Chair"
                  />
                  <TreeItem
                    nodeId="4"
                    className={classes.treeItemCSS}
                    label="Sofa"
                  />
                </TreeItem>
              </Box>
              <Box boxShadow={10} className={classes.boxCSS}>
                <TreeItem
                  nodeId="5"
                  label="Colors"
                  classes={{ label: classes.label }}
                >
                  <TreeItem
                    nodeId="6"
                    className={classes.treeItemCSS}
                    label="Red"
                  />
                  <TreeItem
                    nodeId="7"
                    className={classes.treeItemCSS}
                    label="Black"
                  />
                  <TreeItem
                    nodeId="8"
                    className={classes.treeItemCSS}
                    label="Yellow"
                  />
                </TreeItem>
              </Box>
            </TreeView>
          </Grid>
        </Grid>
        <Grid item xs={9}>
          <Grid className={classes.rightProductGrid}>
            <Grid container item xs={12} style={{ marginLeft: "20px" }}>
              {data.map((ele, i) => {
                return (
                  <Grid item xs={12} sm={4} key={i}>
                    <MediaCard data={ele} />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
};

export default ProductModule;
