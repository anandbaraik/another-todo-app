import React, { useState } from 'react';
type AddTaskProps = {
    onAddTask: (taskName: string) => void;
};
const AddTask = ({ onAddTask }: AddTaskProps) => {
    const [taskName, setTaskName] = useState<string>('');

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskName(e.target.value);
    };

    const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const trimmedTaskName = taskName.trim();
        if (!trimmedTaskName) {
            return;
        }
        onAddTask(trimmedTaskName);
        setTaskName('');
    };
    return (
        <>
            <form onSubmit={handleAddTask}>
                <label htmlFor="task-input">Add Task:</label>
                <input
                    type="text"
                    id="task-input"
                    value={taskName}
                    onChange={inputChangeHandler}
                />
                <button type="submit">Add</button>
            </form>
        </>
    );
};

export default AddTask;
