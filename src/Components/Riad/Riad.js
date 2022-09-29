import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Riad.css';
function Riad() {
  return (
    <>
     <Container>
      <Row >
      {Array.from({ length: 1}).map((_, idx) => (
        <Col xs={12} md={8} >
          <Card style={{ width: '20rem' }}>
          <a className='link' href='https://www.google.com/' target="_blank" text-decoration= "none" ><Card.Img variant="top" src="https://media.istockphoto.com/photos/in-the-hands-of-trees-growing-seedlings-bokeh-green-background-female-picture-id1181366400?s=612x612" />
            <Card.Body >
              <Card.Title style={{color:"black",textDecoration:"none"}}>Card title</Card.Title>
              <Card.Text style={{color:"black"}}>
                This is a longer card with supporting text below as a natural
                
              </Card.Text>
            </Card.Body></a>
          </Card>
        </Col>
      ))}
      
        <Col xs={6} md={4}>
        <Card style={{ width: '18rem' }}>
           <a href='https://www.google.com/' target="_blank"> <Card.Img variant="top" src="https://media.istockphoto.com/photos/in-the-hands-of-trees-growing-seedlings-bokeh-green-background-female-picture-id1181366400?s=612x612" /></a>
            <Card.Body>
              <Card.Title style={{color:"black"}}>Card title</Card.Title>
              <Card.Text style={{color:"black"}}>
                This is a longer card with supporting text below as a natural
                
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
      </Row>
      </Container>
    
    </>
    
    

























//     <CardGroup>
//     <Card>
//       <Card.Img variant="top" src="https://media.istockphoto.com/photos/in-the-hands-of-trees-growing-seedlings-bokeh-green-background-female-picture-id1181366400?s=612x612" />
//       <Card.Body>
//         <Card.Title style={{color:"black"}}>Card title</Card.Title>
//         <Card.Text style={{color:"black"}}>
//           This is a wider card with supporting text below as a natural lead-in
//           to additional content. This content is a little bit longer.
//         </Card.Text>
//       </Card.Body>
//       <Card.Footer>
//         <small className="text-muted">Last updated 3 mins ago</small>
//       </Card.Footer>
//     </Card>
//     <Card>
//       <Card.Img variant="top" src="https://media.istockphoto.com/photos/in-the-hands-of-trees-growing-seedlings-bokeh-green-background-female-picture-id1181366400?s=612x612" />
//       <Card.Body>
//         <Card.Title style={{color:"black"}}>Card title</Card.Title>
//         <Card.Text style={{color:"black"}}>
//           This card has supporting text below as a natural lead-in to
//           additional content.{' '}
//         </Card.Text>
//       </Card.Body>
//       <Card.Footer>
//         <small className="text-muted">Last updated 3 mins ago</small>
//       </Card.Footer>
//     </Card>
//     <Card>
//       <Card.Img variant="top" src="https://media.istockphoto.com/photos/in-the-hands-of-trees-growing-seedlings-bokeh-green-background-female-picture-id1181366400?s=612x612" />
//       <Card.Body>
//         <Card.Title style={{color:"black"}}>Card title</Card.Title>
//         <Card.Text style={{color:"black"}}>
//           This is a wider card with supporting text below as a natural lead-in
//           to additional content. This card has even longer content than the
//           first to show that equal height action.
//         </Card.Text>
//       </Card.Body>
//       <Card.Footer>
//         <small className="text-muted">Last updated 3 mins ago</small>
//       </Card.Footer>
//     </Card>
//   </CardGroup>
  )
}

export default Riad