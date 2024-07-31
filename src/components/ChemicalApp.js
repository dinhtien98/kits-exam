import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Container, ListGroup} from 'reactstrap'
import ViewChemical from './ViewChemical'
import AddChemical from './AddChemical'
import './chemicalApp.css'

export default function ChemicalApp() {
    const {chemicals} = useSelector(state=>state.chemicals)
  return (
    <div>
        <Container className='container'>
            <h1 className='text-center'>Chemicals List</h1>
            <AddChemical/>
            <ListGroup>
            {
            chemicals.map((item,index)=>(
                <ViewChemical key={index} item={item} />
            ))
        }
            </ListGroup>
        </Container>
        
    </div>
  )
}
