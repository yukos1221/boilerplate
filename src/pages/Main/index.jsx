import React from 'react'
import { createUseStyles } from 'react-jss'
import styles from './styles'

const useStyles = createUseStyles(styles)

function MainPage() {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <p>Main page</p>
    </div>
  );
}

export default MainPage
