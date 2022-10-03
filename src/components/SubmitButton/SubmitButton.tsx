import React from "react";
import styles from './SubmitButton.module.scss'

interface IProps {
    value: string
}

export default function SubmitButton({ value }: IProps) {
    return (
        <button className={styles.submitButton} type="submit">{value}</button>
    )
}