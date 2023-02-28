import { ChangeEvent, FormEvent, useState } from 'react'
import { PlusCircle } from "phosphor-react";


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

                <button type='submit'> Criar <PlusCircle /> </button>

            </form>

            <div className={styles.mainContentTask}>

                <div className={styles.headerTask}>
                    <div>
                        <p className={styles.createdTasks}>Tarefas criadas</p>
                        <p>0</p>
                    </div>

                    <div>
                        <p className={styles.doneTasks}>Concluidas</p>
                        <p>0</p>
                    </div>
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