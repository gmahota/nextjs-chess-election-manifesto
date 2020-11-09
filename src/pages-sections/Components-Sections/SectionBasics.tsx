import React from 'react'
// plugin that creates slider
import Slider from 'nouislider'

// @material-ui/core components
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Radio from '@material-ui/core/Radio'
import Switch from '@material-ui/core/Switch'
import Button from '@material-ui/core/Button'

// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite'
import People from '@material-ui/icons/People'
import Check from '@material-ui/icons/Check'
import FiberManualRecord from '@material-ui/icons/FiberManualRecord'

// core components
import { GridContainer, GridItem } from '../../components/Grid'

import {
  defaultFont,
  container,
  title
} from '../../../assets/ts/nextjs-material-kit'
import imagesStyles from '../../../assets/ts/nextjs-material-kit/imagesStyles'

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
    ...imagesStyles
  })
)

interface team {
  name: string
  position: string
  area: string
  image: string
}

export const SectionBasics = function SectionBasics() {
  const classes = useStyles()

  const fmxTeamDirecao: team[] = [
    {
      name: 'Milton Botão',
      position: 'Presidente',
      area: 'DIRECÇÃO',
      image: '/images/team/botao1.jpg'
    },
    {
      name: 'XXXXX',
      position: 'Vice-Presidente para alta competição',
      area: 'DIRECÇÃO',
      image: '/images/team/avatar.png'
    },
    {
      name: 'XXXXX',
      position: 'Vice-presidente para massificação',
      area: 'DIRECÇÃO',
      image: '/images/team/avatar.png'
    },
    {
      name: 'XXXXX',
      position: 'Secretário-geral',
      area: 'DIRECÇÃO',
      image: '/images/team/avatar.png'
    },
    {
      name: 'XXXXX',
      position: 'Tesoureiro',
      area: 'DIRECÇÃO',
      image: '/images/team/avatar.png'
    },
    {
      name: 'XXXXX',
      position: 'Suplente',
      area: 'DIRECÇÃO',
      image: '/images/team/avatar.png'
    },
    {
      name: 'XXXXX',
      position: 'Suplente',
      area: 'DIRECÇÃO',
      image: '/images/team/avatar.png'
    }
  ]

  const fmxTeamAssembleia: team[] = [
    {
      name: 'Rafael Chande',
      position: 'Presidente',
      area: 'Assembleia',
      image: '/images/team/avatar.png'
    },
    {
      name: 'Adriano Chauque',
      position: 'Vice-presidente',
      area: 'Assembleia',
      image: '/images/team/avatar.png'
    },
    {
      name: 'Felicidade Matusse',
      position: 'Secretário',
      area: 'Assembleia',
      image: '/images/team/avatar.png'
    }
  ]

  return (
    <div id="Elenco" className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>O Nosso Elenco</h2>
        </div>

        <div id="images">
          <div className={classes.title}>
            <h2>MESA DA ASSEMBLEIA-GERAL</h2>
          </div>
          <br />
          <GridContainer>
            {fmxTeamAssembleia.map(row => (
              <GridItem key={row.name} xs={12} sm={2}>
                <h4>{row.position}</h4>
                <img
                  src={row.image}
                  alt="..."
                  className={classes.imgRoundedCircle + ' ' + classes.imgFluid}
                />
                <h5>{row.name}</h5>
              </GridItem>
            ))}
          </GridContainer>
          <div className={classes.title}>
            <h2>Direcção</h2>
          </div>
          <br />
          <GridContainer>
            {fmxTeamDirecao.map(row => (
              <GridItem key={row.name} xs={12} sm={2}>
                <h4>{row.position}</h4>
                <img
                  src={row.image}
                  alt="..."
                  className={classes.imgRoundedCircle + ' ' + classes.imgFluid}
                />
                <h5>{row.name}</h5>
              </GridItem>
            ))}
          </GridContainer>
          <GridContainer />
        </div>
      </div>
    </div>
  )
}
