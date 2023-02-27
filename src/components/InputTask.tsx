import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './InputTask.module.css'
import { Task } from './Task'

export function InputTask() {

    const [tasks, setTasks] = useState<string[]>([

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
        <div className={styles.mainTask}>

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

            <div className={styles.mainContentTask}>

                <div className={styles.headerTask}>
                    <p className={styles.createdTasks}>Tarefas criadas</p>
                    <p className={styles.doneTasks}>Concluidas</p>
                </div>

                <div className={styles.contentTask}>
                    {tasks.map(tasksReturn => {
                        return <Task
                            content={tasksReturn}
                        />
                    })}
                </div>

            </div>
        </div>

    )


}