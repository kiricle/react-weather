import React from 'react'
import Card from './Card';
import s from './Days.module.scss'
import Tabs from './Tabs';

type Props = {}

export interface Day {
  day: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
}

const Days = (props: Props) => {
  const days: Day[] = [
    {
      day: 'Сьогодні',
      day_info: '28 серп',
      icon_id: 'sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Хмарно',
    },
    {
      day: 'Завтра',
      day_info: '29 серп',
      icon_id: 'small_rain_sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Невиликий дощ та сонце',
    },
    {
      day: 'Ср',
      day_info: '30 серп',
      icon_id: 'small_rain',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Невеликий дощ',
    },
    {
      day: 'Чт',
      day_info: '31 серп',
      icon_id: 'mainly_cloudy',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Хмарно',
    },
    {
      day: 'Пт',
      day_info: '01 вер',
      icon_id: 'rain',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Хмарно',
    },
    {
      day: 'Сб',
      day_info: '02 вер',
      icon_id: 'sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Хмарно',
    },
    {
      day: 'Нд',
      day_info: '03 вер',
      icon_id: 'sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Хмарно',
    },
  ]

  return (
    <>
      <Tabs />
      <div className={s.days}>
        {
          days.map((day: Day) =>
            <Card dayInfo={day} />)
        }
      </div>
    </>
  )
}

export default Days