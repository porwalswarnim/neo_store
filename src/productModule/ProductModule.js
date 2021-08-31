import React, { useEffect } from "react";
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
import { useDispatch } from "react-redux";
import { BOX_ALLPRODUCT } from "./productUtils";
import axios from "axios";
import { useSelector } from "react-redux";
import { LIST_PRODUCTS } from "../types";

const ProductModule = () => {
  const listProducts = useSelector(state => state.listProducts)
  const classes = useStyles();
  const dispatch = useDispatch();
  var config = {
    method: "get",
    url: 'https://neostore-api.herokuapp.com/api/product',
  };

  useEffect(() => {
    try {
      (async () => {
        const res = await axios(config);
        const docs = res?.data?.data.docs;
        dispatch({
          type: LIST_PRODUCTS,
          payload: docs,
        });

      })();
    } catch (err) {
    }
  }, [])
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
              {listProducts.map((ele, i) => {
                return (
                  <Grid item xs={12} sm={4} key={i}>
                    <MediaCard data={ele} key={ele.id} />
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
