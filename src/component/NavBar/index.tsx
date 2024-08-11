import React from 'react'
import { Switch } from 'antd'
import { useStore } from '@/store'
import logo from '../../../assets/logo1.png'
import styles from './index.module.scss'

const Navbar = () => {
  const {sentToHR,setSentToHR}=useStore()
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={logo} alt="logo" />
        Job Application Email Generator
      </div>
      <div className={styles.menuList}>
        <Switch onChange={()=>setSentToHR(!sentToHR)}/> {sentToHR? 'For HR':'For Employee'}
      </div>
    </nav>
  )
}

export default Navbar
