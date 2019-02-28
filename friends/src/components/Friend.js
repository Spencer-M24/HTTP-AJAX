import React from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap';



const Header = styled.div`
background:#474787;
  width: 30%;
  padding: 10px 2%;
  margin: 30px auto;
  `

const CardText = styled.div`
color:  #B33771;
letter-spacing: 1px;
font-size: 1rem;
font-weight: 400;
`
const H2 = styled.h2`
color:  #34ace0;
letter-spacing: 1px;
font-size: 1rem;
font-weight: 500;
`

export const Friend = props => 

    <Header>
        <H2>{props.friend.name}</H2>
        <CardText>Age: {props.friend.age}</CardText>
        <CardText>Email: {props.friend.email}</CardText>
        <br></br>
        <Button outline color="danger" onClick={ () => props.handleEdit(props.friend.id) }>Edit</Button>
        <Button outline color="danger" onClick = { () => props.handleDelete(props.friend.id) }>Delete</Button>
    </Header>
    ;