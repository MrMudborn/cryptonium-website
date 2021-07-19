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
import SectionNews from "../pages-sections/Components-Sections/SectionNews"

import styles from "assets/jss/nextjs-material-kit/pages/components.js";


const useStyles = makeStyles(styles);

export default function News({newsData}) {
  console.log("News", newsData)
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
                <h1 className={classes.title}>NextJS Material Kit.</h1>
                <h3 className={classes.subtitle}>
                  A Badass Material Kit based on Material-UI and NextJS.
                </h3>
              </div> */}
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>

        <SectionNews/>

      </div>
      <Footer />
    </div>
  );
}

export const getServerSideProps = async () => {
  const id = "crypto OR blockchain OR elon OR vitalik OR defi OR nft"
  const res = await fetch(`https://newsapi.org/v2/everything?q=${id}&from=2021-06-18&sortBy=publishedAt&apiKey=eac4785ce4574e5494e1af3166215957`)

  const newsRes = await res.json()

  return {
    props: {
      newsData: newsRes,
    }
  }
}
