import React from 'react'
import {Card,Button} from 'react-bootstrap'
import Etat from './Etat'

function Names() {
    const Tab = ['Ines','Wael','Ahmed','Cyrine','Jihene','Bochra','Ichrak','Boutheina','Maha','Wissem']
    return (
   <body className='Names' >
    <div>
      <Card style={{ width: '18rem'}}  bg={'dark'}  text={'white'} className={'text-center' }>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Bonjour</Card.Title>
          <Button variant="primary">Commencer</Button>
          <Card.Text>
            <Etat/>
          </Card.Text>
      </Card.Body>
     </Card>
     
    </div>
   </body>
    )
       
}

export default Names
// Tab.map((s)=>{return (<p>{s}</p>)})