/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import {
  defaultFont,
  container,
  title,
  primaryColor
} from '../../../assets/ts/nextjs-material-kit'

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    block: {
      color: 'inherit',
      padding: '0.9375rem',
      fontWeight: 500,
      fontSize: '12px',
      textTransform: 'uppercase',
      borderRadius: '3px',
      textDecoration: 'none',
      position: 'relative',
      display: 'block'
    },
    left: {
      float: 'left',
      display: 'block'
    },
    right: {
      padding: '15px 0',
      margin: '0',
      float: 'right'
    },
    footer: {
      padding: '0.9375rem 0',
      textAlign: 'center',
      display: 'flex',
      zIndex: 2,
      position: 'relative'
    },
    a: {
      color: primaryColor,
      textDecoration: 'none',
      backgroundColor: 'transparent'
    },
    footerWhiteFont: {
      '&,&:hover,&:focus': {
        color: '#FFFFFF'
      }
    },
    container,
    list: {
      marginBottom: '0',
      padding: '0',
      marginTop: '0'
    },
    inlineBlock: {
      display: 'inline-block',
      padding: '0px',
      width: 'auto'
    },
    icon: {
      width: '18px',
      height: '18px',
      position: 'relative',
      top: '3px'
    }
  })
)

interface FooterProps {
  whiteFont?: boolean
}

export const Footer = function Footer(props: FooterProps) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
          <ListItem className={classes.inlineBlock}>
              <a
                href="#Home"
                className={classes.block}

              >
                Pagina Inicial
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="#Elenco"
                className={classes.block}

              >
                Elenco
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="#Programa"
                className={classes.block}
              >
                Programa 
              </a>
            </ListItem>

            <ListItem className={classes.inlineBlock}>
              <a
                href="#FAQ"
                className={classes.block}
              >
                FAQ
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; 2020, Feito com{" "}
          <Favorite className={classes.icon} /> por{" "}
          <a
            href="https://github.com/gmahota/nextjs-chess-election-manifesto"
            className={aClasses}
            target="_blank"
          >
            Guimarães Mahota
          </a>{" "}
          coloque uma estrela no projeto!
        </div>
      </div>
    </footer>
  );
}
