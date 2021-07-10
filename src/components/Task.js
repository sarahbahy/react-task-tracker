import {FaTimes} from 'react-icons/fa'
import '../scss/Task.scss';

const task = ({task, onDelete,onToggle}) => {
    return (
        <div className={`task ${task.reminder?'task--reminder' :'' }`} onDoubleClick={()=>onToggle(task.id)}>
               <h3>{task.text} 
               <FaTimes style={{color:'red', cursor:'pointer'}} onClick={()=>onDelete(task.id)}/>
               </h3>
               <p>{task.day}</p>
        </div>
    )
}

export default task
