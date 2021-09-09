import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import MediaCard from "../card/Card";
import Box from "@material-ui/core/Box";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useHistory, useParams } from "react-router-dom";
import TreeItem from "@material-ui/lab/TreeItem";
import { useStyles } from "./productModuleStyles";
import { useDispatch } from "react-redux";
import { BOX_ALLPRODUCT } from "./productUtils";
import axios from "axios";
import { useSelector } from "react-redux";
import { LIST_PRODUCTS } from "../types";
import { Typography } from "@material-ui/core";

/**
 * @author Swarnim Porwal
 * @description this function contains the loadProducts function which will load all the products from the API, three specific methods onCategoryChange, onColorChange and onSortChange will monitor all the filters being applied 
 * @returns JSX for All Products Screen
 */
const ProductModule = (props) => {
  const listProducts = useSelector((state) => state.listProducts);
  const searchTerm = useSelector((state) => state.searchTerm);
  const { name, id } = useParams();
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const [colorId, setColorId] = useState(null);
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
    const url = `https://neostore-api.herokuapp.com/api/product${props.location.search}`;

    const config = {
      method: "get",
      url: url,
    };
    try {
      dispatch({
        type: "IS_LOADING",
        payload: true,
      });
      const res = await axios(config);
      dispatch({
        type: "IS_LOADING",
        payload: false,
      });
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

  useEffect(() => {
    getProducts();
  }, [id, props.location.search]);

  useEffect(() => {
    history.push({
      pathname: "/productmodule",
      search: `?${categoryId ? `category=${categoryId}&&` : ""}${
        colorId ? `color=${colorId}` : ""
      }`,
    });
  }, [categoryId, colorId]);

  return (
    <div>
      <Grid item container className={classes.mainGrid} row xs={12}>
        <Grid item xs={3}>
          <Grid className={classes.leftProductGrid}>
            <Box
              boxShadow={10}
              className={classes.boxCSS}
              onClick={() => {
                setCategoryId(null);
                setColorId(null);
              }}
            >
              All Products
            </Box>
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
                    .filter((ele) => ele.imageUrl)
                    .map((ele) => {
                      return (
                        <TreeItem
                          nodeId={ele._id}
                          className={classes.treeItemCSS}
                          label={ele.name}
                          onClick={() => setCategoryId(ele._id)}
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
                  {colors.map((ele) => {
                    return (
                      <TreeItem
                        nodeId={ele._id}
                        className={classes.treeItemCSS}
                        label={ele.name}
                        onClick={() => setColorId(ele._id)}
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
              {listProducts?.length === 0 && (
               <Grid
               container
               justify="center"
               style={{ marginTop: "30px", cursor: "pointer" }}
             >
               <img
                 style={{ width: "60%" }}
                 onClick={() => history.push("/home")}
                 src="/NoDataFound.png"
                 alt="image"
               />
             </Grid>
              )}
              {listProducts
                .filter((val) => {
                  if (searchTerm == "") {
                    return val;
                  } else if (
                    val.name.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((ele, i) => {
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
    </div>
  );
};

export default ProductModule;
