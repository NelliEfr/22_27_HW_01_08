import React from 'react'
import s from './index.module.css'
import Button from '../../Button'
export default function AboutUsCard({ value, title }) {
    return (
        <div className={s.about_us_card_item}>
            <p className={s.value}> {value}</p>
            <p className={s.title}>{title}</p>
            <Button type='light_mode'>Подробнее</Button>
        </div>
    )
}
