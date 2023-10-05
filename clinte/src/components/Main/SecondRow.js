import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';
import "./Main.css"

function SecondRow(props) {
  return (
    
      <Col>
        <Card style={props.style}>
          <Card.Body>
          <Container fluid>
          <Row>
          <Card.Title>{props.title}</Card.Title>
            <Col xs={6} md={6}>
              <Image src={props.img1} roundedCircle />
              <Figure><Figure.Caption style={{ fontSize: '12px', textAlign: 'center' }}>
                {props.img1des}
              </Figure.Caption></Figure>
            </Col>
            <Col xs={6} md={6}>
              <Image src={props.img2} roundedCircle />
              <Figure><Figure.Caption style={{ fontSize: '12px', textAlign: 'center'}}>
              {props.img2des} <br /> {props.img2des2}
      </Figure.Caption></Figure>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6}>
              <Image src={props.img3} roundedCircle />
              <Figure><Figure.Caption style={{ fontSize: '12px', textAlign: 'center' }}>
              {props.img3des}
      </Figure.Caption></Figure>
            </Col>
            <Col xs={6} md={6}>
              <Image src={props.img4} roundedCircle />
              <Figure><Figure.Caption style={{ fontSize: '12px', textAlign: 'center' }}>
              {props.img4des}
      </Figure.Caption></Figure>
            </Col>
          </Row>
          </Container>
          </Card.Body>
        </Card>
      </Col>
    
  )
}

export default SecondRow
