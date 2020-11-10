import React from 'react'

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
      image: '/images/team/gui2.png'
    },
    {
      name: 'Cidalia',
      position: 'Vice-presidente para massificação',
      area: 'DIRECÇÃO',
      image: '/images/team/cidalia2.png'
    },
    {
      name: 'Aldo Pinto',
      position: 'Secretário-geral',
      area: 'DIRECÇÃO',
      image: '/images/team/aldo1.png'
    },
    {
      name: 'Adilson Serrão',
      position: 'Tesoureiro',
      area: 'DIRECÇÃO',
      image: '/images/team/adilson.png'
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
      image: '/images/team/chande1.png'
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

  const fmxTeamTecnico: team[] = [
    {
      name: 'XXXX',
      position: 'Presidente',
      area: 'CONSELHO JURISDICIONAL',
      image: '/images/team/soca1.png'
    },
    {
      name: 'XXXXX',
      position: 'Vice-presidente',
      area: 'CONSELHO JURISDICIONAL',
      image: '/images/team/avatar.png'
    },
    {
      name: 'XXXX',
      position: 'Secretário',
      area: 'CONSELHO JURISDICIONAL',
      image: '/images/team/avatar.png'
    }
  ]

  const fmxTeamJuridicional: team[] = [
    {
      name: 'XXXX',
      position: 'Presidente',
      area: 'CONSELHO JURISDICIONAL',
      image: '/images/team/soca1.png'
    },
    {
      name: 'XXXXX',
      position: 'Vice-presidente',
      area: 'CONSELHO JURISDICIONAL',
      image: '/images/team/avatar.png'
    },
    {
      name: 'XXXX',
      position: 'Secretário',
      area: 'CONSELHO JURISDICIONAL',
      image: '/images/team/avatar.png'
    }
  ]

  const fmxTeamFiscal: team[] = [
    {
      name: 'XXXX',
      position: 'Presidente',
      area: 'CONSELHO Fiscal',
      image: '/images/team/soca1.png'
    },
    {
      name: 'XXXXX',
      position: 'Vice-presidente',
      area: 'CONSELHO Fiscal',
      image: '/images/team/avatar.png'
    },
    {
      name: 'XXXX',
      position: 'Secretário',
      area: 'CONSELHO Fiscal',
      image: '/images/team/avatar.png'
    }
  ]

  return (
    <div id="Elenco" className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Composição da Lista aos Órgãos Sociais da FMX</h2>
        </div>

        <div>
          <p>
            Grande parte dos membros que compõem, são sem duvida, alguns dos
            mais experientes e individualidades dedicadas ao nosso desporto, e
            outras personalidades estão indirectamente ligados ao xadrez mas
            trazem conhecimentos e experiências de outros campos da vida social
            e profissional, o que constitui uma combinação ideal de
            Perspectivas, Conhecimento e Paixão.
          </p>
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

          <div className={classes.title}>
            <h2>Conselho Tecnico</h2>
          </div>
          <br />
          <GridContainer>
            {fmxTeamTecnico.map(row => (
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

          <div className={classes.title}>
            <h2>Conselho Jurisdicional </h2>
          </div>
          <br />
          <GridContainer>
            {fmxTeamJuridicional.map(row => (
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

          <div className={classes.title}>
            <h2>Conselho Fiscal </h2>
          </div>
          <br />
          <GridContainer>
            {fmxTeamFiscal.map(row => (
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
