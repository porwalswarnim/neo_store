import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import MediaCard from "../card/Card";
import Box from "@material-ui/core/Box";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useHistory } from "react-router-dom";
import TreeItem from "@material-ui/lab/TreeItem";
import { useStyles } from "./productModuleStyles";
import { useDispatch } from "react-redux";
import { BOX_ALLPRODUCT } from "./productUtils";
import axios from "axios";
import { useSelector } from "react-redux";
import { LIST_PRODUCTS } from "../types";

const ProductModule = () => {
  const listProducts = useSelector((state) => state.listProducts);
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const getCategories = async () => {
    const config = {
      method: "get",
      url: "https://neostore-api.herokuapp.com/api/category",
    };
    try {
      const res = await axios(config);
      setCategories(res?.data?.data);
    } catch (error) {
      alert("failed");
    }
  };
  const getColors = async () => {
    const config = {
      method: "get",
      url: "https://neostore-api.herokuapp.com/api/color",
    };
    try {
      const res = await axios(config);
      setColors(res?.data?.data);
    } catch (error) {
      alert("failed");
    }
  };
  const getProducts = async () => {
    const config = {
      method: "get",
      url: "https://neostore-api.herokuapp.com/api/product",
    };
    try {
      const res = await axios(config);
      const docs = res?.data?.data.docs;
      dispatch({
        type: LIST_PRODUCTS,
        payload: docs,
      });
    } catch (err) {
      alert("failed");
    }
  };

  useEffect(() => {
    getProducts();
    getCategories();
    getColors();
  }, []);
  return (
    <div>
      <Header />
      <Grid item container className={classes.mainGrid} row xs={12}>
        <Grid item xs={3}>
          <Grid className={classes.leftProductGrid}>
            <BOX_ALLPRODUCT />
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
                  {categories
                    // .filter((ele) => ele.imageUrl)
                    .map((ele, i) => {
                      return (
                        <TreeItem
                          nodeId={i}
                          className={classes.treeItemCSS}
                          label={ele.name}
                          onClick={() =>
                            history.push(`/productmodule/${ele._id}`)
                          }
                        />
                      );
                    })}
                </TreeItem>
              </Box>
              <Box boxShadow={10} className={classes.boxCSS}>
                <TreeItem
                  nodeId="5"
                  label="Colors"
                  classes={{ label: classes.label }}
                >
                  {colors.map((ele, i) => {
                    return (
                      <TreeItem
                        nodeId={i}
                        className={classes.treeItemCSS}
                        label={ele.name}
                        onClick={() =>
                          history.push(`/productmodule/${ele._id}`)
                        }
                      />
                    );
                  })}
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
