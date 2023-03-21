import React from 'react';
import stl from './Form.module.scss';
import { useForm } from 'react-hook-form';

const Form = ({ fetchedGens }) => {
    console.log(fetchedGens)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm({
        mode: "onBlur",
    });
    const onSubmit = handleSubmit((data) => {
        
        alert(JSON.stringify({ data }));
        reset();
    });
    return (
        <div className={stl.formContainer}>
            <form onSubmit={onSubmit}>
                <input
                    placeholder="Ім'я"
                    {...register("firstName", {
                        required: "поле обов'язкове для заповнення",
                        minLength: {
                            value: 2,
                            message: "мінімум два символа",
                        },
                        maxLength: {
                            value: 20,
                            message: "не більше 20-ти символів",
                        },
                    })}
                />
                <div style={{ height: 20 }}>
                    {errors?.firstName && (
                        <p>
                            {errors?.firstName?.message || "Помилка!"}
                        </p>
                    )}
                </div>
                <input
                    placeholder="Номер телефону"
                    type="number"
                    {...register("phone", {
                        required: "поле обов'язкове для заповнення",
                        minLength: {
                            value: 10,
                            message: "Ввеедіть коректний номер телефону",
                        },
                        maxLength: {
                            value: 13,
                            message: "Ввеедіть коректний номер телефону",
                        },
                    })}
                />
                <div style={{ height: 20 }}>
                    {errors?.phone && (
                        <p>{errors?.phone?.message || "Ввеедіть коректний номер телефону!"}</p>
                    )}
                </div>
                {/* <input type="reset" value="ОЧИСТИТИ" /> */}
                <input
                    placeholder="Адреса доставки"
                    type="text"
                    {...register("adress", {
                        required: "поле обов'язкове для заповнення",
                    })}
                />
                <div style={{ height: 20 }}>
                    {errors?.adress && (
                        <p>
                            {errors?.firstName?.message || "Помилка!"}
                        </p>
                    )}
                </div>
                {fetchedGens.length > 0 ? (
                    <select {...register("select", {
                        required: "необхідно вибрати генератор"
                    })}>
                        {fetchedGens.map((generator) => {
                            return (
                                <option key={generator._id} value={`${generator.title} - ${generator.price} - ${generator.color} - ${generator.availability}`}>
                                    {`${generator.title} - ${generator.price} грн. - ${generator.color} - ${generator.availability}`}
                                </option>
                            )
                        })}
                    </select>

                )
                    :
                    <select {...register("select", {
                        required: "необхідно вибрати генератор"
                    })}>
                        <option value="error fetching data">відсутні товари</option>
                    </select>
                }
                <div style={{ height: 20 }}>
                    {errors?.select && (
                        <p>
                            {errors?.firstName?.message || "Помилка!"}
                        </p>
                    )}
                </div>
                <textarea
                    placeholder="Коментар"
                    type="text"
                    {...register("comment")}
                />
                <div className={stl.submitBorder}>
                    <input
                        type="submit"
                        value="Оформити замовлення"
                        disabled={!isValid}
                    />
                </div>
            </form>
        </div>)
}

export default Form