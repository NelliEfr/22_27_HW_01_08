import React, { useContext } from 'react'
import s from './index.module.css'
import { Context } from '../../context'

export default function CardItem({ id, de, rus, lang }) {
    const {change_lang, deleteCard} = useContext(Context);
    const text = lang === 'rus' ? rus : de;
    const card_style = {
        color: lang === 'de' ? 'white' : '#2980b9',
        backgroundColor: lang === 'de' ? '#2980b9' : 'white'
    }

    return (
        <div
            onClick={() => change_lang(id)} className={s.card} style={card_style} onDoubleClick={() => deleteCard(id)}>
            {text}
        </div>
    )
}
