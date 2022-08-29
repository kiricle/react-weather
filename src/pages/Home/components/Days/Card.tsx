import React from 'react'
import GlobalSvgSelector from '../../../../assets/icons/global/globalSvgSelector';
import { Day } from './Days';
import s from './Days.module.scss';

type Props = {
  dayInfo: Day
}

const Card = ({ dayInfo }: Props) => {
  const { day, day_info, icon_id, temp_day, temp_night, info } = dayInfo;

  return (
    <div className={s.card}>
      <div className={s.day}>{day}</div>
      <div className={s.dayInfo}>{day_info}</div>
      <div className={s.img}>
        <GlobalSvgSelector id={icon_id}/>
      </div>
      <div className={s.tempDay}>{temp_day}</div>
      <div className={s.tempNight}>{temp_night}</div>
      <div className={s.info}>{info}</div>
    </div>
  )
}

export default Card