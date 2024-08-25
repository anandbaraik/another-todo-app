import React from 'react';
type TaskListHeader = {
    count: number;
};
const TaskListHeader = ({ count }: TaskListHeader) => {
    return <h2>Total Task {count}</h2>;
};

export default TaskListHeader;
