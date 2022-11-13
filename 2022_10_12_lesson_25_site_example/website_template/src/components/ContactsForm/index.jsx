import React from 'react'
import s from './index.module.css'
import { useForm } from 'react-hook-form'

export default function ContactsForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submit = data => console.log(data);

    const firstnameRegister = register('first_name', {
        required: '* Enter your firs tname'
    });
    const lastnameRegister = register('last_name', {
        required: '* Enter your last name'
    });
    const messageRegister = register('message', {
        required: '* Enter your message'
    });

    return (
        <form className={s.contacts_form} onSubmit={handleSubmit(submit)}>
            <div className={s.names_block}>
                <label htmlFor="">
                    <p>Имя</p>
                    <input
                        type="text"
                        name='first_name'
                        placeholder='Иван'
                        {...firstnameRegister}

                    />

                </label>
                <label htmlFor="">
                    <p>Фамилия</p>
                    <input
                        type="text"
                        name='last_name'
                        placeholder='Иванов'
                        {...lastnameRegister}
                    />
                </label>
            </div>

            <label>
                <p>Сообщение</p>
                <textarea
                    name="message"
                    placeholder='Ваше сообщение'
                    {...messageRegister}></textarea>
            </label>

            <div className={s.error_message}>
                {errors.first_name && <p>{errors.first_name?.message}</p>}
            </div>

            <div className={s.error_message}>
                {errors.last_name && <p>{errors.last_name?.message}</p>}
            </div>

            <div className={s.error_message}>
                {errors.message && <p>{errors.message?.message}</p>}
            </div>
            <button>Отправить сообщение</button>

        </form>
    )
}
