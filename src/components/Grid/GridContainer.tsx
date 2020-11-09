import React from 'react'

// @material-ui/core components
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    grid: {
      marginRight: '-15px',
      marginLeft: '-15px',
      width: 'auto'
    }
  })
)

type Props = {
  children?: React.ReactNode
  className?: string
}

export const GridContainer = function GridContainer(props: Props) {
  const classes = useStyles()
  const { children, className, ...rest } = props
  return (
    <Grid container {...rest} className={classes.grid + ' ' + className}>
      {children}
    </Grid>
  )
}
