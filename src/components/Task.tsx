import styles from './Task.module.css'
import { Trash } from "phosphor-react";

interface taskProps {
    onDeleteTask: (content: string) => void;
    content: string;
}

export function Task({ content, onDeleteTask }: taskProps) {
    function handleDeleteTask() {
        onDeleteTask(content);
    }
    return (
        <div className={styles.taskMain}>
            <input type="checkbox" className={styles.taskCheckbox} />
            {content}
            <button onClick={handleDeleteTask} title='Deletar atividade'>
                <Trash size={24} />
            </button>

        </div>
    )
}