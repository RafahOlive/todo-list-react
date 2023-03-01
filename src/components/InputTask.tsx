import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { PlusCircle } from "phosphor-react";

import styles from './InputTask.module.css'
import { Task } from './Task'

export function InputTask() {
    const [taskCount, setTaskCount] = useState(0);

    const [tasks, setTasks] = useState<string[]>([

    ]);

    const [newTaskText, setNewTaskText] = useState('');


    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();
        setTasks([...tasks, newTaskText]);
        setNewTaskText('');

        setTaskCount(taskCount + 1);
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewTaskText(event.target.value);
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatorio!');
    }

    function deleteTask(taskToDelete: string) {
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task !== taskToDelete;
        })
        setTasks(tasksWithoutDeletedOne);
        setTaskCount(taskCount - 1);
    }

    return (
        <div className={styles.mainTask}>

            <form
                onSubmit={handleCreateNewTask}
                className={styles.formTask}>

                <textarea
                    placeholder="Adicione uma nova tarefa"
                    value={newTaskText}
                    onChange={handleNewTaskChange}
                    onInvalid={handleNewTaskInvalid}
                    required
                >
                </textarea>

                <button type='submit'> Criar <PlusCircle /> </button>

            </form>

            <div className={styles.mainContentTask}>

                <div className={styles.headerTask}>
                    <div className={styles.tasksBox}>
                        <p className={styles.createdTasks}>Tarefas criadas</p>
                        <p className={styles.tasksCounter}>{taskCount}</p>
                    </div>

                    <div className={styles.tasksBox}>
                        <p className={styles.doneTasks}>Concluidas</p>
                        <p className={styles.tasksCounter}>0</p>
                    </div>
                </div>

                <div className={styles.contentTask}>
                    {tasks.map(tasksReturn => {
                        return (
                            <Task
                                key={tasksReturn}
                                content={tasksReturn}
                                onDeleteTask={deleteTask}
                            />
                        )
                    })}
                </div>

            </div>
        </div>

    )


}