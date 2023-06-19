import react from 'react';
import img6 from '../assets/health.jpg'
import img7 from '../assets/business.jpg'
import img8 from '../assets/economy.jpg'
import img9 from '../assets/mental.jpg'
import img10 from '../assets/coverImg.jpg'
import './Blogs.css';

const Blogs = () => {
    return(
        <div class="blogsWrapper" >
            <h1 id='blogs'>Trending Blogs</h1>
            <div class="cardContainer">
            <div class='cardWrapper' id="cardWrapper">
            <div class="card  " id='card' >
                <h3>Health</h3>
                <img id='newsCardImg' class="card-img-top" src={img6} alt="Card image cap" />
                <div class="card-body">
                    <h4>Health is an important ascept of life</h4>
                    <a href="#" class="btn btn-primary">Read More</a>
                </div>
            </div>
            </div>
            <div class='cardWrapper' id="cardWrapper">
            <div class="card  " id='card' >
                <h3>Work</h3>
                <img id='newsCardImg' class="card-img-top" src={img7} alt="Card image cap" />
                <div class="card-body">
                    <h4>Working is good but only in limit</h4>
                    <a href="#" class="btn btn-primary">Read More</a>
                </div>
            </div>
            </div>
            <div class='cardWrapper' id="cardWrapper">
            <div class="card  " id='card' >
                <h3>Growth</h3>
                <img id='newsCardImg' class="card-img-top" src={img8} alt="Card image cap" />
                <div class="card-body">
                    <h4>Growth comes only with hardship</h4>
                    <a href="#" class="btn btn-primary">Read More</a>
                </div>
            </div>
            </div>
            <div class='cardWrapper' id="cardWrapper">
            <div class="card  " id='card' >
                <h3>Mental Health</h3>
                <img id='newsCardImg' class="card-img-top" src={img9} alt="Card image cap" />
                <div class="card-body">
                    <h4>Have peace and life a good life</h4>
                    <a href="#" class="btn btn-primary">Read More</a>
                </div>
            </div>
            </div>
            <div class='cardWrapper' id="cardWrapper">
            <div class="card  " id='card' >
                <img id='newsCardImg' class="card-img-top" src={img10} alt="Card image cap" />
                <div class="card-body">
                    <p><h4 class="card-text">Arrested</h4>Man arrested smoking weed in public ... </p>
                    <a href="#" class="btn btn-primary">Read More</a>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}
export default Blogs;