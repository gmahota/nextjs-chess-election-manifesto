/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { MenuBook, People, Help } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// core components
import {
  defaultFont
} from '../../../assets/ts/nextjs-material-kit'


// core components
import { CustomDropdown } from "../CustomDropdown/CustomDropdown";
import { RegularButton } from "../CustomButtons/RegularButton";
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme: Theme) => (
  createStyles({
    list: {
      ...defaultFont,
      fontSize: "14px",
      margin: 0,
      paddingLeft: "0",
      listStyle: "none",
      paddingTop: "0",
      paddingBottom: "0",
      color: "inherit"
    },
    listItem: {
      float: "left",
      color: "inherit",
      position: "relative",
      display: "block",
      width: "auto",
      margin: "0",
      padding: "0",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        "&:after": {
          width: "calc(100% - 30px)",
          content: '""',
          display: "block",
          height: "1px",
          marginLeft: "15px",
          backgroundColor: "#e5e5e5"
        }
      }
    },
    listItemText: {
      padding: "0 !important"
    },
    navLink: {
      color: "inherit",
      position: "relative",
      padding: "0.9375rem",
      fontWeight: 400,
      fontSize: "20px",
      textTransform: "uppercase",
      borderRadius: "3px",
      lineHeight: "20px",
      textDecoration: "none",
      margin: "0px",
      display: "inline-flex",
      "&:hover,&:focus": {
        color: "inherit",
        background: "rgba(200, 200, 200, 0.2)"
      },
      [theme.breakpoints.down("sm")]: {
        width: "calc(100% - 30px)",
        marginLeft: "15px",
        marginBottom: "8px",
        marginTop: "8px",
        textAlign: "left",
        "& > span:first-child": {
          justifyContent: "flex-start"
        }
      }
    },
    notificationNavLink: {
      [theme.breakpoints.down("md")]: {
        top: "0",
        margin: "5px 15px"
      },
      color: "#FFF",
      padding: "0.9375rem",
      fontWeight: 400,
      fontSize: "12px",
      textTransform: "uppercase",
      lineHeight: "20px",
      textDecoration: "none",
      margin: "0px",
      display: "inline-flex",
      top: "4px"
    },
    registerNavLink: {
      [theme.breakpoints.down("md")]: {
        top: "0",
        margin: "5px 15px"
      },
      top: "3px",
      position: "relative",
      fontWeight: 400,
      fontSize: "12px",
      textTransform: "uppercase",
      lineHeight: "20px",
      textDecoration: "none",
      margin: "0px",
      display: "inline-flex"
    },
    navLinkActive: {
      color: "inherit",
      backgroundColor: "rgba(255, 255, 255, 0.1)"
    },
    icons: {
      width: "20px",
      height: "20px",
      marginRight: "3px"
    },
    socialIcons: {
      position: "relative",
      fontSize: "20px !important",
      marginRight: "4px"
    },
    dropdownLink: {
      "&,&:hover,&:focus": {
        color: "inherit",
        textDecoration: "none",
        display: "block",
        padding: "10px 20px"
      }
    },
    tooltip: {
      padding: "10px 15px",
      minWidth: "130px",
      color: "#555555",
      lineHeight: "1.7em",
      background: "#FFFFFF",
      border: "none",
      borderRadius: "3px",
      boxShadow:
        "0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)",
      maxWidth: "200px",
      textAlign: "center",
      fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
      fontSize: "0.875em",
      fontStyle: "normal",
      fontWeight: 400,
      textShadow: "none",
      textTransform: "none",
      letterSpacing: "normal",
      wordBreak: "normal",
      wordSpacing: "normal",
      wordWrap: "normal",
      whiteSpace: "normal",
      lineBreak: "auto"
    },
    marginRight5: {
      marginRight: "5px"
    }
  })
));

type Props = {
  children?: React.ReactNode
  className?: string
}


export const HeaderLinks = function HeaderLinks(props: Props) {
  const classes = useStyles();
  return (

    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link href="#Elenco">
          <Button
            className={classes.navLink}
          >
            <People /> Elenco
        </Button>
        </Link>

      </ListItem>

      <ListItem className={classes.listItem}>
        <Link href="#Programa">
          <Button className={classes.navLink}>

            <MenuBook /> Programa
        </Button>
        </Link>

      </ListItem>

      <ListItem className={classes.listItem}>
        <Link href="#FAQ">
          <Button className={classes.navLink}>

              <Help className={classes.icons} /> Perguntas
          </Button>
        </Link>
      </ListItem>


    </List>
  );
}
