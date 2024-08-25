import React, { useState } from 'react';
import { Task } from './constants/task.type';
import AddTask from './component/AddTask';
import TaskList from './component/TaskList';
import TaskListItem from './component/TaskListItem';
import TaskListHeader from './component/TaskListHeader';

function App() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const onAddTask = (taskName: string) => {
        setTasks((prev) => [
            { title: taskName, isCompleted: false, id: new Date().getTime() },
            ...prev,
        ]);
    };
    return (
        <div>
            <h1>Tasks</h1>
            <AddTask onAddTask={onAddTask} />
            <TaskList>
                <TaskListHeader count={tasks.length} />
                {tasks?.map((task) => (
                    <TaskListItem key={task.id}>{task.title}</TaskListItem>
                ))}
            </TaskList>
        </div>
    );
}

export default App;
