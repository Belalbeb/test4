
import './Slider.css';


function Slider(){
    return(
        <>
        <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://assets-global.website-files.com/614d610a3dd0725153e51ded/6222149bfbdb5b0645ae4c0e_eCommerce-Website-Components-photo.jpeg" className="d-block w-100 height-300" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.acowebs.com/wp-content/uploads/2019/02/Impact-of-eCommerce-On-Society.png" className="d-block w-100 height-300" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://blog-frontend.envato.com/cdn-cgi/image/width=2560,quality=75,format=auto/uploads/sites/2/2022/04/E-commerce-App-JPG-File-scaled.jpg" className="d-block w-100 height-300" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

</>


    );
}
export default Slider;