import React from 'react'
import s from './ThisDayInfo.module.scss';
import cloud from '../../../../assets/images/cloud.png';
import ThisDayItem from './ThisDayItem';

type Props = {}

export interface Item {
  icon_id: string,
  name: string,
  value: string,
}

const ThisDayInfo = (props: Props) => {

  const items = [
    {
      icon_id: 'temp',
      name: 'Температура',
      value: '20° - відчувається як 17°',
    },
    {
      icon_id: 'pressure',
      name: 'Тиск',
      value: '765 мм ртутного стовпа – нормальний',
    },
    {
      icon_id: 'precipitation',
      name: 'Опади',
      value: 'Без опадів',
    },
    {
      icon_id: 'wind',
      name: 'Вітер',
      value: '3 м/с південно-західний - легкий вітер',
    },
  ];

  return (
    <div className={s.thisDayInfo}>
      <div className={s.thisDayInfoItems}>
        {
          items.map((item: Item) => 
          <ThisDayItem key={item.icon_id} item={item} />)
        }
      </div>
      <img className={s.cloudImg } src={cloud} alt="Хмара" />
    </div>
  )
}

export default ThisDayInfo