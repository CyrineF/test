import React from 'react'
import {Button} from 'react-bootstrap'
import {useState} from 'react'


function Etat() {
    const Tab = ['Ines','Wael','Ahmed','Cyrine','Jihene','Bochra','Ichrak','Boutheina','Maha','Wissem']
    const [count,setcount] = useState(0)
    return (
        <div>
            <h1>{Tab[count]}</h1>
                <Button variant="success" onClick = {()=> setcount(count+1)}>Présent</Button> {''}
                <Button variant="warning" onClick = {()=> setcount(count+1)}> Excusé</Button> {' '}
                <Button variant="danger" onClick = {()=> setcount(count+1)}>Absent</Button>
                
                
                
             
        </div>
    )
}

export default Etat
