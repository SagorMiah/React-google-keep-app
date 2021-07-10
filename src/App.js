import React,{useState} from 'react'
import './index.css'
import Keep from './components/Keep'
import Noteitem from './components/Noteitem'

const App = () => {
    const [addItem,setAddItem] = useState([])
    const addNoteItem = (note) => {
        setAddItem(pre => {
            return [...pre,note]
        })
    }
    const dleteNoteItem = (id) => {
        setAddItem(oldData => 
            oldData.filter((current,ind) => {
                return ind !== id
            }))
    }
    return (
        <>
           <Keep addingNote={addNoteItem} />
           <div className="keepWra">
               {addItem.map((val,index) => {
                   return(
                    <Noteitem 
                    key={index}
                    id={index}
                    title={val.title}
                    des={val.des}
                    singleDelete={dleteNoteItem}
                     />
                   )
               })}
           </div>
        </>
    )
}

export default App;