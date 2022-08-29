import React from 'react'
import GlobalSvgSelector from '../../assets/icons/global/globalSvgSelector';
import Select from 'react-select'
import s from './Header.module.scss';

type Props = {}

const Header = (props: Props) => {
  const options = [
    { value: 'Dnipro', label: 'Дніпро' },
    { value: 'Kyiv', label: 'Київ' },
    { value: 'Lviv', label: 'Львів' }
  ];

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: 'rgba(71, 147, 255, 0.2)',
      borderRadius: '10px',
      width: '194px',
      height: '37px',
      fontWeight: 'bold',
    }),
    option: (styles: any) => ({
      ...styles,
      fontWeight: 'bold',
    })
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
        <div className={s.changeTheme}>
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