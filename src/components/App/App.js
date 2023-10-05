import { Col, Container, Row } from 'react-bootstrap'
import Header from "../Header";
import NewsCard from '../NewsCard';
import image1 from '../../static/images/image1.webp'
import image2 from '../../static/images/image2.webp'
import image3 from '../../static/images/image3.jpg'
import image4 from '../../static/images/image4.webp'

function App() {

  const news = [
    {
      id: 1,
      title: '1 News Title',
      text: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
      img: image1
    },
    {
      id: 2,
      title: '2 News Title',
      text: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
      img: image2
    },
    {
      id: 3,
      title: '3 News Title',
      text: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
      img: image3
    },
    {
      id: 4,
      title: '4 News Title',
      text: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
      img: image4
    }
  ]

  return (
      <div>
        <Header />
        <Container>
          <h1>My blog</h1>
          <p>As with many news websites, we aim for our stories to be accessible and understandable for as wide an audience as possible – from members of the public with a casual interest in science, to PhD-holding academics.</p>
        </Container>
        <Container>
          <Row>
            {
              news.map((n) => {
                return (
                  <Col lg={3} md={4} sm={6} xs={12} key={n.id}>
                    <NewsCard data={n} />
                  </Col>
                )
              })
            }
          </Row>
        </Container>
        <Container fluid className='bg-dark text-white p-3 text-center'>
            <Container>
                &copy; 2023 News portal. All Rights Reserved
            </Container>
        </Container>
      </div>
  ) 

}

export default App;
