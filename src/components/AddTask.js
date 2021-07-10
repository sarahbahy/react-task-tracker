import '../scss/addTask.scss';
import { useState } from 'react';

const AddTask = ({onAdd}) => {
    const [text, settext] = useState('')
    const [day, setday] = useState('')
    const [reminder, setreminder] = useState(false)
    const onSubmit= (e)=>{
        e.preventDefault()
        if(!text){
            alert('please enter a task')
            return
        }
        onAdd({text,day,reminder})
        settext('')
        setreminder(false)
        setday('')
    }
    return (
        <form className="add-form"  onSubmit={onSubmit}>
            <div className="add-form__control">
                <label>Task</label>
                <input 
                    type='text' 
                    value={text}
                    onChange={(e)=>settext(e.target.value)}
                    placeholder="add task"
                />
            </div>
            <div className="add-form__control">
                <label>Day & time</label>
                <input 
                    type='text' 
                    placeholder='add Day & time'
                    value={day} 
                    onChange={(e)=>setday(e.target.value)}
                />
            </div>
            <div className="add-form__control add-form__control--check">
                <label>set reminder</label>
                <input 
                type='checkbox' 
                placeholder="set reminder"
                value={reminder} 
                checked={reminder}
                onChange={(e)=>setreminder(e.currentTarget.checked)}
                />
            </div>
            <input className='btn btn--block' type='submit' value='save task'/>

        </form>
    )
}

export default AddTask
