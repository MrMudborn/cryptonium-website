import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page

import styles from "assets/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);

export default function Home() {
  const classes = useStyles();
  
  // const { ...rest } = props;
  return (
    <div>
      <Header
        brand="cryptonium"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 90,
          color: "white"
        }}
        // {...rest}
      />
      <Parallax image={require("assets/img/nextjs_header.png")} style={{height:'200px'}}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              {/* <div className={classes.brand}>
                <h3 className={classes.subtitle}>
                  Coins: {globalDataCoin.active_cryptocurrencies}
                </h3>
                <h3 className={classes.subtitle}>
                  Markets: {globalDataCoin.markets}
                </h3>
                <h3 className={classes.subtitle}>
                  Dominance: BTC {formatPercent(globalDataCoin.market_cap_percentage.btc)} ETH {formatPercent(globalDataCoin.market_cap_percentage.eth)}     
                </h3>
              </div> */}
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <h1>Home</h1>
      </div>
      <Footer />
    </div>
  );
}