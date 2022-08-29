import React from 'react'
import GlobalSvgSelector from '../../assets/icons/global/globalSvgSelector'
import { Item } from '../../pages/Home/components/ThisDayInfo/ThisDayInfo'
import ThisDayItem from '../../pages/Home/components/ThisDayInfo/ThisDayItem'
import s from './Popup.module.scss'

type Props = {
}

const Popup = (props: Props) => {
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
    <>
      <div className={s.blur}></div>
      <div className={s.popup}>
        <div className={s.day}>
          <div className={s.dayTemp}>20°</div>
          <div className={s.dayName}>Середа</div>
          <div className={s.img}></div>
          <div className={s.dayTime}>
            Час: <span>21:54</span>
          </div>
          <div className={s.dayCity}>
            Місто: <span>Дніпро</span>
          </div>
        </div>
        <div className={s.thisDayInfo}>
          <div className={s.thisDayInfoItems}>
            {
              items.map((item: Item) =>
                <ThisDayItem key={item.icon_id} item={item} />)
            }
          </div>

        </div>
        <div className={s.close}>
          <GlobalSvgSelector id='close' />
        </div>
      </div>
    </>
  )
}

export default Popup