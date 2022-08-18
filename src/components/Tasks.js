import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle }) => {

    return (
        <>
            {tasks.map(alltask => <Task key={alltask.id} task={alltask} onDelete={onDelete} onToggle={onToggle} />)}
        </>
    )
}

export default Tasks