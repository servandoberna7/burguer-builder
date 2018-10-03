import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Tooldbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerHandler = () => {
    const reverse = !this.state.showSideDrawer;
    this.setState({ showSideDrawer: reverse });
  };

  render() {
    return (
      <Aux>
        <Toolbar click={this.sideDrawerHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
