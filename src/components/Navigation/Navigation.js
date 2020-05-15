import React from "react";
import NavigationItems from "./NavigationItems/NavigationItems";
import styles from './Navigation.module.css'

const navigation = (props) => {
  return (
      <div className={styles.navigation}>
          {/*<h3>Logo</h3>*/}
          <NavigationItems/>
      </div>
  )
};

export default navigation;