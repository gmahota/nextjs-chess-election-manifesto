import React from 'react'

// @material-ui/core components
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

// core components
import { GridContainer, GridItem } from '../../components/Grid'
import { container, title } from '../../../assets/ts/nextjs-material-kit'

// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard'
import Schedule from '@material-ui/icons/Schedule'
import List from '@material-ui/icons/List'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      padding: '70px 0'
    },
    container,
    title: {
      ...title,
      marginTop: '30px',
      minHeight: '32px',
      textDecoration: 'none'
    },
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: 224
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`
    }
  })
)

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  }
}

export const SectionProgram = function SectionProgram() {
  const classes = useStyles()

  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div className={classes.section} id="Programa">
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h3>Programa de Actividades</h3>
          </div>
          <div className={classes.title}>
            <h3>
              <small>
                PILARES DE DESENVOLVIMENTO DE XADREZ NACIONAL 2020/2024
              </small>
            </h3>
          </div>

          <div className={classes.root}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              className={classes.tabs}
            >
              <Tab label="Item One" {...a11yProps(0)} />
              <Tab label="Item Two" {...a11yProps(1)} />
              <Tab label="Item Three" {...a11yProps(2)} />
              <Tab label="Item Four" {...a11yProps(3)} />
              <Tab label="Item Five" {...a11yProps(4)} />
              <Tab label="Item Six" {...a11yProps(5)} />
              <Tab label="Item Seven" {...a11yProps(6)} />
            </Tabs>
            <TabPanel value={value} index={0}>
              Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
              Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
              Item Five
            </TabPanel>
            <TabPanel value={value} index={5}>
              Item Six
            </TabPanel>
            <TabPanel value={value} index={6}>
              Item Seven
            </TabPanel>
          </div>
        </div>
      </div>
    </div>
  )
}
