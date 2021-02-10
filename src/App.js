import Gerar from './components/Gerar'
import Validar from './components/Validar'
import './App.css'
import { Card, CardTitle, CardText, Row, Col, Jumbotron, Container } from 'reactstrap';


function App() {
  return (
    <div>


      <Jumbotron fluid className="jumbo">
        <Container fluid>
          <h3 className="display-3 center">Gerador e validador de CPF</h3>
          <p className="lead center">usando o framework React JS.</p>
        </Container>
      </Jumbotron>


      <Row>
        <Col sm='1'></Col>
        <Col sm="5">
          <Card body className='gerador shadow p-3 mb-5 bg-white rounded'>
            <CardTitle tag="h3">Gerador</CardTitle>
            <CardText>Clique no botão para gerar um número de CPF válido.</CardText>
            <Gerar />
          </Card>
        </Col>


        <Col sm="5">
          <Card body className='gerador shadow p-3 mb-5 bg-white rounded'>
            <CardTitle tag="h3">Validador</CardTitle>
            <CardText>Insira um CPF e clique no botão para o validar.</CardText>
            <Validar />
          </Card>
        </Col>
        <Col sm='1'></Col>
      </Row>

    </div>
  );
}

export default App;
