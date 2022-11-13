import React from 'react'
import s from './index.module.css'

export default function CardItem({ id, de, rus, lang, change_lang, deleteCard }) {
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
