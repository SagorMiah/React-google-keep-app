import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

const Noteitem = (props) => {
    const deleteItem = () => {
        props.singleDelete(props.id)
    }
    return (
        <>
            <div className="skeep">
                <h5>{props.title}</h5>
                <p>{props.des}</p>
                <button className="deleteBtn" onClick={deleteItem}>
                    <DeleteIcon />
                    del
                </button>
            </div>
        </>
    )
}

export default Noteitem