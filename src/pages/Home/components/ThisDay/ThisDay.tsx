import React from 'react'
import GlobalSvgSelector from '../../../../assets/icons/global/globalSvgSelector'
import { Weather } from '../../../../store/types/types'
import s from './ThisDay.module.scss'

type Props = {
  weather: Weather
}

const ThisDay = ({ weather }: Props) => {
  const today = new Date();
  const time = `${('0' + today.getHours()).slice(-2)}:${('0' + today.getMinutes()).slice(-2)}`

  return (
    <div className={s.thisDay}>
      <div className={s.topBlock}>
        <div className={s.topWrapper}>
          <div className={s.thisTemp}>{Math.floor(weather.main.temp)}</div>
          <div className={s.thisDayName}>Сьогодні</div>
        </div>
        <GlobalSvgSelector id='sun' />
      </div>
      <div className={s.bottomBlock}>
        <div className={s.thisTime}>Час: <span>{time}</span></div>
        <div className={s.thisCity}>
          Місто: <span>{weather.name}</span>
        </div>
      </div>
    </div>
  )
}

export default ThisDay