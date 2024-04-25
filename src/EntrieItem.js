import { useState } from "react"

function EntrieItem({title,date}){
const [entrieslist,setEntryList] = useState([])

return (
    <div id="entries">
        <h3>Entry Title: {title} </h3>
        <span>Date: {date} </span>
    </div>
)
}

export default EntrieItem
