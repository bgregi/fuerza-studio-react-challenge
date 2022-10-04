import React from "react";
import styles from './SubmitButton.module.scss'

interface IProps {
    value: string,
    handleSubmit?: React.MouseEventHandler<HTMLButtonElement>
}

export default function SubmitButton({ value, handleSubmit }: IProps) {
    return (
        <button onClick={handleSubmit} className={styles.submitButton} type="submit">{value}</button>
    )
}