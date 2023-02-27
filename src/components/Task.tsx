import styles from './Task.module.css'
import { Trash } from "phosphor-react";

interface taskProps {
    content: string;
}

export function Task({ content }: taskProps) {
    return (
        <div className={styles.taskMain}>
            <input type="checkbox" className={styles.taskCheckbox} />
            {content}
            <Trash />
        </div>
    )
}