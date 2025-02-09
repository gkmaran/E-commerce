import React from 'react'
import './NewCollection.css'
import newcollection from '../Assets/new_collections'
import Item from '../item/item'
const NewCollection = () => {
  return (
    <div className='newcollection'>
        <h2>NEW COLLETIONS</h2>
        <hr />
            <div className="newcollection-item">
                {newcollection.map((item)=>(
                    <Item key={item.id} item={item}/>
                ))}
            </div>
      
    </div>
  )
}

export default NewCollection
