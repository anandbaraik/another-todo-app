import React from 'react';
const TaskListItem = ({ children }: React.PropsWithChildren) => {
    return <li>{children}</li>;
};

export default TaskListItem;
