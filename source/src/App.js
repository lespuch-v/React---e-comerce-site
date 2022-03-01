import './App.css';
import DemoCarousel from './components/Carousel';
import Footer from './components/Footer';
import ImageElement from './components/ImageElement';


function App() {
  return (
    <div className='first-one'>
      <div className="main-body-container">
        <DemoCarousel />
      </div>
        <h1>Awesome Games to your Collection</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi veritatis aperiam velit illo ad beatae facere molestiae voluptatem dolores voluptates pariatur, hic quaerat dolorem explicabo ipsa corrupti illum similique saepe. Cum, dolores! Doloribus beatae nesciunt necessitatibus veritatis dolorum aliquid quidem cum recusandae qui deserunt corporis ullam architecto impedit sapiente harum optio nostrum ex commodi placeat, itaque adipisci dolor! Molestias quam adipisci sapiente reiciendis, quas quae maiores saepe fugiat tempore facilis animi, labore commodi eligendi nihil obcaecati blanditiis libero quod et porro laboriosam! Perferendis dolor quis quo, facere, fugiat, dicta quisquam iusto sit minus molestiae corrupti ut temporibus. Libero, tempore eius?</p>
      <div className='main-page-images'>
        <ImageElement />
      </div>
        <Footer/>
    </div>
  );
}

export default App;
