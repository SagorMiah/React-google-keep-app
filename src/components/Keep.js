import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';

const Keep = (props) => {
    const [hide,setHide] = useState(false)
    const [note,setNote] = useState({
        title : "",
        des : ""
    })
    const inputValue = (e) => {
        const {name,value} = e.target
        setNote(pre => {
            return {
                ...pre,
                [name] : value
            }
        })
    }
    const addNote = () => {
        props.addingNote(note)
        setNote({
            title : "",
            des : ""
        })
    }
    const changeKeep = () => {
        setHide(true)
    }
    const backToNormal = () => {
        setHide(false)
    }
    return (
        <>
         <h1 style={{textAlign : "center",margin : "15px 0px"}}>Google Keep</h1>
         <div className="keepNote" onDoubleClick={backToNormal}>
            {hide?<input autoComplete="off"
             name="title"
             className="keepinput" type="text" 
             placeholder="Title" 
             value={note.title}
             onChange={inputValue}
             />:null}
            <textarea
            name="des" 
            className="keeptext" 
            placeholder="Take a note..."
            value={note.des}
            onChange={inputValue}
            onClick={changeKeep}
            >
            </textarea>

            {hide?<button className="keepAdd" onClick={addNote}>
                <AddIcon />
            </button>:null}
        </div>
        </>
    )
}

export default Keep