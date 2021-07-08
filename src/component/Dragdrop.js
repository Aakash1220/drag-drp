import React, {  useState,useRef } from 'react';
import './dragdrop.css' ;
function Dragdrop({data}) {

const [list , setList] = useState(data);
const [dragging , setDragging] = useState(false);

const	dragItem = useRef();
const	dragNode = useRef();

const dragStart = (e, obj)=>{
	console.log(obj);
	dragItem.current = obj;
	dragNode.current = e.target;
	dragNode.current.addEventListener('dragend', handleDragEnd)
	setTimeout(() =>{
			setDragging(true)

	},0)
}
const handleDragEnter = (e, obj) => {
       const currentItem = dragItem.current;
        if ( e.target !== dragNode.current)  {
            setList(oldList => {
                let newList = JSON.parse(JSON.stringify(oldList));			
                newList[obj.gI].items.splice(obj.itemI, 0, newList[currentItem.gI].items.splice(currentItem.itemI,1)[0])				
                dragItem.current = obj;
                return newList
            })
        }
    }
	
	
	
const handleDragEnd = () =>{
		setDragging(false)
		dragNode.current.removeEventListener('dragend', handleDragEnd)
dragItem.current = null;
	dragNode.current =null;

}
const getStyle = (obj) =>{
	const currentItem = dragItem.current;
	if( currentItem.gI === obj.gI && currentItem.itemI === obj.itemI){
		return 'current list_items' 
}
	return 'list_items'
}
	return (
        
		
            <div className="container">
			{list.map((g,gI) =>(
                <div key={g.title} className="lists" onDragEnter={dragging && !g.items.length?(e) => handleDragEnter(e,{gI, itemI: 0}):null} className="list_items">
					{g.items.map((item,itemI)=>(
                    <div className=
					{dragging?getStyle({gI,itemI}):"list_items"} 
					onDragStart={(e)=>{dragStart(e,{gI,itemI})}  }
					onDragEnter={dragging?(e)=> {handleDragEnter(e,{gI,itemI})}:null}
					key={item} draggable="true">
					{item}
					</div>
                    ))}
                </div>
					))}
            </div>
		
        
	
    )
}

export default Dragdrop
