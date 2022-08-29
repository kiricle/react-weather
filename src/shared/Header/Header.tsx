import React, { useState, useEffect } from 'react'
import GlobalSvgSelector from '../../assets/icons/global/globalSvgSelector';
import Select, { StylesConfig } from 'react-select'
import s from './Header.module.scss';
import { useTheme } from '../../hoooks/useTheme';
import { Theme } from '../../context/ThemeContext';

type Props = {}

const Header = (props: Props) => {
  const theme = useTheme();
  const options = [
    { value: 'Dnipro', label: 'Дніпро' },
    { value: 'Kyiv', label: 'Київ' },
    { value: 'Lviv', label: 'Львів' }
  ];


  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: theme.theme === Theme.LIGHT ? 'rgba(71, 147, 255, 0.2)' : '#4f4f4f',
      borderRadius: '10px',
      width: '194px',
      height: '37px',
      fontWeight: 'bold',
      cursor: 'pointer'
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.LIGHT ? '#000' : '#fff',
    }),
    menuList: (styles: any) => ({
      ...styles,
      backgroundColor: theme.theme === Theme.LIGHT ? 'rgba(71, 147, 255, 0.2)' : '#4f4f4f',
      borderRadius: '4px'
    }),
    option: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.LIGHT ? '#000' : '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: '.2s',
      ':hover': {
        ...styles[':hover'],
        backgroundColor: '#4793ff'
      }
    })
  }

  const changeTheme = () => {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id='header-logo' />
        </div>
        <h1 className={s.title}>React Weather</h1>
      </div>
      <div className={s.wrapper}>
        <div className={s.changeTheme} onClick={changeTheme}>
          <GlobalSvgSelector id='change-theme' />
        </div>
        <Select
          defaultValue={options[0]}
          options={options}
          styles={colorStyles}
        />
      </div>
    </header>
  )
}

export default Header;