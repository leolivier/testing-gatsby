import * as React from 'react';
import { Link } from 'gatsby';
import * as styles from './layout.module.css';

const Layout = ({
	pageTitle, 
	children }: {
  	pageTitle: string,
  	children: React.ReactNode
  }) => {
  return (
		<div className={styles.container}>
      <nav>
        <ul className={styles.navLinks}>
          <li className={styles.navLinkItem}>
            <Link className={styles.navLinkText} to="/">Home</Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link className={styles.navLinkText} to="/about">About</Link></li>
        </ul>
      </nav>
      <main>
        <h1 className={styles.heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout