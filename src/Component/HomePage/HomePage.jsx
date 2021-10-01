import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import NavBar from "../NavBar/NavBar";
import BannerCarousel from "../BannerCarousel/BannerCarousel";
import Products from "../Products/Products";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getProductDetails,addProductList } from "../../Redux/productSlice";

const drawerWidth = 300;

export default function HomePage({ history }) {
  const [productList, setProductList] = useState([]);
  const dispatch = useDispatch();

  const viewProductDetails = (product) => {
    console.log(product);
    dispatch(getProductDetails({productDetails:product}))
    history.push({
      pathname: `/productDetails/${product.id}`,
      state: { productDetail: product, productList:productList },
    });
  };

  const getProducts = async () => {
    await axios
      .get("http://localhost:3000/products")
      .then(function (response) {
        // handle success
        setProductList(response.data);
        dispatch(addProductList({productList:response.data}))
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <NavBar />
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {/* <ListItem id="" >
              <ListItemText primary={"Categories"} />
            </ListItem> */}
            {/* <Divider /> */}
            {["Mobile Phones", "Desktop", "Laptops", "Watches"].map(
              (text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    <ArrowRightIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              )
            )}
          </List>
        </Box>
      </Drawer>
      <div className="container">
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {/* <Toolbar /> */}

          <BannerCarousel className="mt-1" />

          <h3 className="mt-5 mb-5">Today's Deals</h3>
          <div className="container">
            <div className="row">
              {productList.map((product) => (
                <div className="col-md-3 mb-5">
                  <Products
                    data={product}
                    showProductDetails={() => viewProductDetails(product)}
                  />
                </div>
              ))}
            </div>
          </div>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
            eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
            quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
            vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
            ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
            elementum integer enim neque volutpat ac tincidunt. Ornare
            suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
            volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
            Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
            ornare massa eget egestas purus viverra accumsan in. In hendrerit
            gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
            aliquam sem et tortor. Habitant morbi tristique senectus et.
            Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean
            euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
            ultrices sagittis orci a.
          </Typography>
        </Box>
      </div>
    </Box>
  );
}
