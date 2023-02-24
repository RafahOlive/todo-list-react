import { useState } from 'react'
import styles from './InputTask.module.css'
import { Task } from './Task'

export function InputTask() {

    const [tasks, setTasks] = useState<string[]>([
        'task 1',
        'task 2',
        'task 3',
        'task 4',
    ])


    return (
        <>
            <form className={styles.formTask}>
                <textarea placeholder="Adicione uma nova tarefa"></textarea>
                <button type='submit'> Criar </button>
            </form>

            <div>
                { tasks.map(tsk => {
                    return <Task />
                })}
            </div>
        </>

    )


}