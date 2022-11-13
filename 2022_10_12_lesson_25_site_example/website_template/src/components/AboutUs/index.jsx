import React from 'react'
import s from './index.module.css'
import { aboutUsData } from '../../data/aboutUsData'
import AboutUsCard from './AboutUsCard'

export default function AboutUs() {
    return (
        <section className={['wrapper', s.about_us_section].join(' ')}>
            <div className={s.info_block}>
                <p className={'subheader'}> О нас</p>
                <h2>Комания <span className={s.accent}>ИвановПром </span></h2>
                <p className={s.info_text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt sequi obcaecati eligendi rem sunt aperiam necessitatibus hic harum amet molestias cumque quibusdam, a
                    sapiente earum repellat accusamus error non quo?</p>
            </div>
            <div className={s.achievements_cards}>
                {aboutUsData.map(el => <AboutUsCard key={el.id} {...el} />)}
            </div>
        </section>
    )
}
