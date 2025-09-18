export const Task = ({ task,onToggle, onDelete  }) => {
  return (
    <div className="task">
      <div className="content">
        <input 

        onChange={onToggle}
        checked={task.done}
        type="checkbox"
         id={`task-${task}`} 
        className="checkbox mr-1" />
         <label
          className={`label ${task.done ? "line-through " : "text-gray-800"}`}
        >
          {task.content}
        </label>
      </div>
      <span className="text-lg font-thin rounded-circle" onClick={onDelete}>x</span>
    </div>
  );
};
