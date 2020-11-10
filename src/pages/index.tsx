import React from 'react'
import Head from 'next/head'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import classNames from 'classnames'

import { Link } from '@material-ui/core'

import { Header, HeaderLinks } from './../components/Header'
import { Parallax } from './../components/Parallax/Parallax'
import { RegularButton } from './../components/CustomButtons/RegularButton'
import { GridContainer, GridItem } from './../components/Grid'

import { container } from '../../assets/ts/nextjs-material-kit'
import { SectionBasics } from './../pages-sections/Components-Sections/SectionBasics'
import { SectionProgram } from './../pages-sections/Components-Sections/SectionProgram'

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    // container: {
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   paddingLeft: '20'
    // },
    container: {
      ...container,
      display: 'flex',
      justifyContent: 'space',
      alignItems: 'center'
    },

    brand: {
      // color: '#FFFFFF',
      textAlign: 'left'
    },
    title: {
      fontSize: '2.0rem',
      fontWeight: 600,
      display: 'inline-block',
      position: 'relative'
    },
    subtitle: {
      fontSize: '0.8rem',
      maxWidth: '800px',
      margin: '10px 0 0'
    },
    main: {
      background: '#FFFFFF',
      position: 'relative',
      zIndex: 3
    },
    mainRaised: {
      margin: '-60px 30px 0px',
      borderRadius: '6px',
      boxShadow:
        '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
      '@media (max-width: 830px)': {
        marginLeft: '10px',
        marginRight: '10px'
      }
    },
    link: {
      textDecoration: 'none'
    },
    textCenter: {
      textAlign: 'center'
    }
  })
)

export default function Home({ org, props }) {
  const classes = useStyles()
  const { ...rest } = props

  return (
    <div>
      <Head>
        <title>Candidatura FMX</title>
      </Head>
      <main>
        <Header
          brand="Manifesto Eleitoral Candidatura FMX 2020"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: 'white'
          }}
        />
        <Parallax image="/images/bg4.jpg">
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>
                    LISTA LIDERADA POR MILTON BOTÃO.
                  </h1>
                  <h3 className={classes.subtitle}>
                    CAMINHANDO JUNTOS EM PROL DO DESENVOVIMENTO DO XADREZ
                    NACIONAL.
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <SectionBasics />
          <SectionProgram />
        </div>
      </main>
    </div>
  )
}
