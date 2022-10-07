import React from "react";
import styles from "./NoteCover.module.scss"

interface IProps {
    title: string
}

export default function NoteCover({ title }: IProps) {


    return (
        <div className={styles.boxWrapper}>
            <div className={styles.mainBox}>

            <p>{title}</p>
            </div>
            <div className={styles.backgroundBox}></div>

        </div>

    )
}