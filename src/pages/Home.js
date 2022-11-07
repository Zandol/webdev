import React from 'react'
import Carousel from 'react-bootstrap/Carousel';




const Home = () => {
    return (
        <>
   <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1956974/pexels-photo-1956974.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className='titre'>le tourisme gastronomique à la française</h1>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/6401669/pexels-photo-6401669.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="Second slide"
        />
        <Carousel.Caption>
        <h1 className='titre'>le tourisme gastronomique à la française</h1>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/9396370/pexels-photo-9396370.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="Third slide"
        />
        <Carousel.Caption>
        <h1 className='titre'>le tourisme gastronomique à la française</h1>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    


    <div class="container">
     
      <div class="card card-1">
       
        <div class="card-header">
          <img src="https://images.pexels.com/photos/7144387/pexels-photo-7144387.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img" />
        </div>
       
        <div class="card-body">
          <h3 class="card-local">Estados Unidos</h3>
          <h2 class="card-titulo">Cidade Um</h2>
          <p class="card-texto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio libero saepe quo excepturi quisquam, dolores doloremque cupiditate adipisci
            incidunt mollitia.
          </p>
        </div>
       
        <div class="card-footer">
          <a href="#">Ver Mais</a>
        </div>
        
      </div>
     
      <div class="card card-2">
        
        <div class="card-header">
          <img src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img" />
        </div>
       
        <div class="card-body">
          <h3 class="card-local">China</h3>
          <h2 class="card-titulo">Cidade Dois</h2>
          <p class="card-texto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio libero saepe quo excepturi quisquam, dolores doloremque cupiditate adipisci
            incidunt mollitia.
          </p>
        </div>
       
        <div class="card-footer">
          <a href="#">Ver Mais</a>
        </div>
       
      </div>
     
      <div class="card card-3">
       
        <div class="card-header">
          <img src="https://images.pexels.com/photos/1247677/pexels-photo-1247677.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img" />
        </div>
       
        <div class="card-body">
          <h3 class="card-local">França</h3>
          <h2 class="card-titulo">Cidade Tres</h2>
          <p class="card-texto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio libero saepe quo excepturi quisquam, dolores doloremque cupiditate adipisci
            incidunt mollitia.
          </p>
        </div>     
        <div class="card-footer">
          <a href="#">Ver Mais</a>
        </div>
        
      </div>
         
    </div>

        </>
    );
}

export default Home
