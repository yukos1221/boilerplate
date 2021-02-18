import React from 'react'
import { createUseStyles } from 'react-jss'
import styles from './styles'

const useStyles = createUseStyles(styles)

function AboutPage() {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <p>About page</p>
    </div>
  );
}

export default AboutPage
