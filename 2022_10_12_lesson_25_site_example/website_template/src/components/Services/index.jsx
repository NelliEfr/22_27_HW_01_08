import React from 'react'
import { servicesData } from '../../data/servicesData'
import ServiceCard from '../ServiceCard'
import s from './index.module.css'

export default function Services() {
    return (
        <div className={s.services}>
            {
                servicesData.map(el => <ServiceCard key={el.id} {...el} />)
            }
        </div>
    )
}
