import React, { Component } from 'react'
import Faq from 'react-faq-component'

// @material-ui/core components
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

// core components
import { GridContainer, GridItem } from '../../components/Grid'

import {
  defaultFont,
  container,
  title
} from '../../../assets/ts/nextjs-material-kit'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sections: {
      padding: '20px 0'
    },
    defaultFont,
    container,
    title: {
      ...title,
      marginTop: '30px',
      minHeight: '32px',
      textDecoration: 'none'
    },
    space50: {
      height: '50px',
      display: 'block'
    },
    space70: {
      height: '70px',
      display: 'block'
    },
    icons: {
      width: '17px',
      height: '17px',
      color: '#FFFFFF'
    },
    imgFluid: {
      maxWidth: 100,
      height: 'auto'
    },
    imgRounded: {
      borderRadius: '6px !important'
    },
    imgRoundedCircle: {
      borderRadius: '50% !important'
    },
    imgRaised: {
      boxShadow:
        '0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
    },
    imgGallery: {
      width: 100,
      marginBottom: '2.142rem'
    },
    imgCardTop: {
      width: 100,
      borderTopLeftRadius: 'calc(.25rem - 1px)',
      borderTopRightRadius: 'calc(.25rem - 1px)'
    },
    imgCardBottom: {
      width: 100,
      borderBottomLeftRadius: 'calc(.25rem - 1px)',
      borderBottomRightRadius: 'calc(.25rem - 1px)'
    },
    imgCard: {
      width: 100,
      borderRadius: 'calc(.25rem - 1px)'
    },
    imgCardOverlay: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      padding: '1.25rem'
    }
  })
)

export const SectionFaq = function SectionFaq() {
  const classes = useStyles()

  const data = {
    title: 'Perguntas Frequentes',
    rows: [
      {
        title:
          'Como será feito a distribuição do valor do fundo para as associações',
        content:
          '- No nosso primeiro ano de mandato iremos dedicar 40% do orçamento para as associações, para legalização e apoio na capacidade de gestão e desenvolvimento de parcerias público-privadas'
      },
      {
        title:
          'As associações que não derem voto de confiança ao elenco serão excluídas?',
        content:
          '- Iremos trabalhar com todas as associações de igual forma, apoiar e empoderar todas as Associações Provinciais, é prioridade do nosso manifesto'
      }
    ]
  }

  return (
    <div id="FAQ" className={classes.sections}>
      <div className={classes.container}>
        <Faq data={data} />
      </div>
    </div>
  )
}
