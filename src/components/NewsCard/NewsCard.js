import React from "react";
import { Card, CardBody } from "react-bootstrap";

function NewsCard({ data }) {

    const { title, text, img } = data;

    return (
      <Card className='mb-4'>
        <Card.Img variant='top' src={img} />
        <CardBody>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </CardBody>
      </Card> 
    )
}

export default NewsCard