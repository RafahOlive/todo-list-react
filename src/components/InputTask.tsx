import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './InputTask.module.css'
import { Task } from './Task'

export function InputTask() {

    const [tasks, setTasks] = useState<string[]>([
        'task 1'
    ])

    const [newTaskText, setNewTaskText] = useState('');


    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();
        setTasks([...tasks, newTaskText]);
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setNewTaskText(event.target.value);
    }

    return (
        <div>

            <form
                onSubmit={handleCreateNewTask}
                className={styles.formTask}>

                <textarea
                    placeholder="Adicione uma nova tarefa"
                    onChange={handleNewTaskChange}
                >
                </textarea>

                <button type='submit'> Criar </button>

            </form>

            <div>
                {tasks.map(tasksReturn => {
                    return <Task
                        content={tasksReturn}
                    />
                })}
            </div>
        </div>

    )


}