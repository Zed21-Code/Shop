import React, { useEffect, useState } from 'react'
import axios from "axios"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import juice from "../../components/images/juice machine.png"
import storage from "../../components/images/storage.png"
import active from "../../components/images/topWear and short.png"
import saveing from "../../components/images/topSavings.png"
import Figure from 'react-bootstrap/Figure';
import SecondRow from './SecondRow';
import techc from "../../components/images/tech clearance.png"
import fashion from "../../components/images/fashion clearance.png"
import home from "../../components/images/home clearnace.png"
import seasonal from "../../components/images/seasonal decor.png"
import Button from 'react-bootstrap/Button';
import girl from '../../components/images/girl.png'
import pc from '../../components/images/pc.png'
import toy from '../../components/images/toys.png'
import Form from 'react-bootstrap/Form';


function Main() {

const [item, setItem]=useState('')
const [price, setPrice]=useState(0)
const [orderList, setOrderList]= useState([])
const [itemdelete, setItemDelete] = useState('')
const [pricedelete, setPriceDelete] = useState('')


useEffect(()=>{
  axios.get("http://localhost:6900/show").then((response)=>{
    setOrderList(response.data)
  })
}, [])

const orderForm = ()=> {
  axios.post("http://localhost:6900/insert",{
    item: item,
    price : price
  })
    
  setOrderList([
    ...orderList, 
    {item: item, 
      price:price
    } 
  ])
}

const deleteItem = ()=> {
  axios.delete("http://localhost:6900/delete-order",{
    data: {
      item: itemdelete,
      price: pricedelete
    }
  })  
  window.location.reload()
}

const updateItem = ()=> {
  axios.put("http://localhost:6900/update",{
    data: {
      item: itemdelete,
      price: pricedelete
    }
  })  
  window.location.reload()
}


  return (
    <div>
      <Container fluid>
      
      <Row>

        {/* section for Reserve pickup or delivery */}

        <Col xs={6} lg={3}>
        <Card style={{ width: '24rem', paddingBottom:'4rem', background:'#e6f1fc' }}>
      <Card.Body>
        <Card.Title style={{fontSize: '17px'}}>Reserve pickup or delivery <Button variant="light" style={{width: '5rem', height: '2rem', fontSize: '12px', border:'2px solid black', borderRadius: '25px', marginLeft: '15%'}}>see times</Button></Card.Title>
      </Card.Body>
        </Card>
        
        {/* section for Top departments */}

        <Card style={{ width: '24rem', marginTop: '1rem' }}>
      <Card.Body>
        <Card.Title style={{fontSize: '17px'}}>Top departments <a style={{color:'black', fontSize:'14px', marginLeft: '45%', }} href='#'>View All</a></Card.Title>

        <Container fluid style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
          <Row>
            <Col xs={6} md={4}>
              <Image src={pc} roundedCircle />
              <Figure><Figure.Caption style={{ fontSize: '12px', textAlign:'center' }}>
              Electronics
              </Figure.Caption></Figure>
            </Col>
            <Col xs={6} md={4}>
              <Image src={toy} roundedCircle />
              <Figure><Figure.Caption style={{ fontSize: '12px', textAlign: 'center'}}>
              Toys
              </Figure.Caption></Figure>
            </Col>
            <Col xs={6} md={4}>
              <Image src={girl} roundedCircle />
              <Figure><Figure.Caption style={{ fontSize: '12px', textAlign: 'center'}}>
              Toys
              </Figure.Caption></Figure>
            </Col>
          </Row>
          </Container>
      </Card.Body>
        </Card>
        </Col>

        {/* section for Reset for your New Year */}

        <Col xs={6} lg={3}>
        <SecondRow       
        title="Reset for your New Year"
        img1={active}
        img2={juice}
        img3={storage}
        img4={saveing}
        img1des="Activewear from $8"
        img2des="Kitchen appliances under"
        img2des2="$100"
        img3des="Storage under $35"
        img4des="60% off select finds"
        style= {{ width: '24rem' }}
        
        />
        </Col>

        {/* section for Can't-miss savings */}

        <Col xs={6} lg={3}>
        <SecondRow 
        title="Can't-miss savings"
        img1={techc}
        img2={fashion}
        img3={home}
        img4={seasonal}
        img1des="Tech clearance"
        img2des="Fashion clearance"
        img2des2=" "
        img3des="Home clearance"
        img4des="Seasonal decor clerance"
        style={{ width: '24rem', paddingBottom: '1rem' }}
        
        />
        </Col>

        {/* section for order form */}

        <Col xs={6} lg={3}>
          <Container fluid style={{background:'#86be67', padding: '90px 4rem' }}>
            <Container style={{background:'#ffffff', padding: '2rem' }}>
            <form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" name='item' onChange={(e)=> {
          console.log(e)
          setItem(e.target.value);}} placeholder="item name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" name='price' onChange={(e)=> {
          console.log(e)
          setPrice(e.target.value);}} placeholder="price" />
            </Form.Group>
            </form>
            <Button variant="success" style={{width:'11rem'}} onClick={orderForm}>Order</Button>
            </Container>
            
          </Container>
        </Col>

      </Row>
    </Container>

    {/* section for order list */}

    <Container id='orders' style={{background: '#0d6efd', marginTop: '3rem'}}>
      <row>
        <p style={{fontWeight: 'bold', fontSize: '19px', background: '#ffffff', width: '335px', border: '4px solid #3f48cc',textAlign: 'center', marginLeft: '30%'}}>ORDERS</p>
        {orderList.map((val) =>{
          return (
            <h2>
              Item: {val.item}     ||     Price:{val.price}
            </h2>
          )
          })}
      </row>
    </Container>

    

    <Container id='ordersList' style={{background: '#198754', marginTop: '2rem' }}>
    <Row style={{paddingTop: '1rem' }}>
        <Col>
        <Container fluid>
          <Row>
            <Col md={8} >
            <form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" name='itemdelete' onChange={(e)=>{
          console.log(e)
          setItemDelete(e.target.value);}} placeholder="item name" />
            </Form.Group>
            </form>
            </Col>
            <Col md={4} >
            <form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" name='pricedelete' onChange={(e)=>{
          console.log(e)
          setPriceDelete(e.target.value);}} placeholder="price" />
            </Form.Group>
            </form>
            </Col>
          </Row>
        </Container>
        </Col>
        <Col><Button onClick={deleteItem} variant="primary" name='delete' style= {{width:'8rem', fontSize:'24px',color:'black', fontWeight: 'bold' , marginLeft: '70%'}}>Delete</Button></Col>
        {/* <Col><Button onClick={updateItem} variant="primary" name='update' style= {{width:'8rem', fontSize:'24px',color:'black', fontWeight: 'bold' ,marginLeft: '70%'}}>Update</Button></Col> */}
      </Row>
    </Container>
    </div>
  )
}

export default Main
