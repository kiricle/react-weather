import React from 'react'
import s from './Days.module.scss';

type Props = {}

function Tabs(props: Props) {
  const tabs = [
    {
      value: 'На тиждень',
    },
    {
      value: 'На 10 днів',
    },
    {
      value: 'На місяць',
    },
  ];

  console.log(s)

  return (
    <div className={s.tabs}>
      <div className={s.tabsWrapper}>
        {
          tabs.map((tab) =>
            <div className={s.tab} key={tab.value}>
              {tab.value}
            </div>
          )
        }
      </div>
      <div className={s.cancel}>Скасувати</div>
    </div>
  )
}

export default Tabs