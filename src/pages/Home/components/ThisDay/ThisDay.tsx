import React from 'react'
import GlobalSvgSelector from '../../../../assets/icons/global/globalSvgSelector'
import s from './ThisDay.module.scss'

type Props = {}

const ThisDay = (props: Props) => {
  return (
    <div className={s.thisDay}>
      <div className={s.topBlock}>
        <div className={s.topWrapper}>
          <div className={s.thisTemp}>20°</div>
          <div className={s.thisDayName}> Сьогодні</div>
        </div>
        <GlobalSvgSelector id='sun' />
      </div>
      <div className={s.bottomBlock}>
        <div className={s.thisTime}>Час: <span>21:54</span></div>
        <div className={s.thisCity}>
          Місто: <span>Дніпро</span>
        </div>
      </div>
    </div>
  )
}

export default ThisDay