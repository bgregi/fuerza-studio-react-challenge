import React, { useState } from "react";
import styles from './Input.module.scss'

interface IProps {
    type: string
    placeholder: string
    name: string
    handleInputChange: Function
}

export default function Input({ type, placeholder, name, handleInputChange }: IProps) {
    // Defines the CSS class for the label tag in order to toggle it with handlechange
    const [labelClass, setLabelClass] = useState(styles.inputLabelInvisible)

    // Toggles the visibility of the label tag through CSS classes
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.value !== "") {
            setLabelClass(styles.inputLabelVisible)
        } else {
            setLabelClass(styles.inputLabelInvisible)            
        }

        //Calls function from parent component to save input value to a State
        handleInputChange(e)
    }

    return (
        <div className={styles.inputWrapper}>
            <label htmlFor={type} className={labelClass}>{placeholder}</label>
            <input name={name} type={type} className={styles.input} placeholder={placeholder} onChange={handleChange} />
        </div>
    )
}