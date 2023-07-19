import React,{useState} from 'react'
import CommomSection from './../shared/CommomSection'
import { Container,Row,Col } from 'reactstrap'
import { useLocation } from 'react-router-dom'
import TourCard from './../shared/TourCard'
import Newletters from './../shared/Newsletters'
const SearchResultList = () => {

  const location = useLocation()
  const [data]= useState(location.state)
  return <>

  <CommomSection title={'Tour search result'}/>
  <section>
      <Container>
        <Row>
          {
            data.length===0 ? <h4 className='text-center'>No Tour Found</h4> :data?.map(tour=>
            <Col lg='3' className='mb-4' key={tour._id}><TourCard tour={tour}/></Col>)
          }
        </Row>
      </Container>
  </section>
  <Newletters/>
  </>
}
 
export default SearchResultList