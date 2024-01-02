import React from "react"
import styles from "./SearchBar.module.scss"
import classNames from "classnames"
import {Input, Icon} from "../../atoms"

type AppProps = {
    value: string,
    onChange: (prop: any) => void,
    className?: string
}

export const SearchBar = ({value, onChange, className}: AppProps) => {
    return <div className={classNames(className, styles.div)}>
        <Input value={value} onChange={onChange} placeholder={"Wyszukaj..."} className={styles.input}/>
        <Icon iconType="search" className={styles.icon}/>
    </div>
}