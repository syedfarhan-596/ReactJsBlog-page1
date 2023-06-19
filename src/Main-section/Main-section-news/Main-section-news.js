import react from 'react';
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.jpg'
import img9 from '../assets/img9.jpg'
import img10 from '../assets/img10.jpg'
import './Main-section-news.css';
const MainSectionNews = () =>{
    return(
        <div class="cardContainer">
            <div class='cardWrapper'>
            <div class="card" id="newsCards" >
                <img id='newsCardImg' class="card-img-top" src={img1} alt="Card image cap" />
                <div class="card-body">
                    <h7 class="card-title text-danger text-danger text-danger text-danger">posted :0min ago</h7>
                    <p><h4 class="card-text">Class 10th topped in Upsc</h4>class 10th student ...</p>
                    <span class="bi bi-heart-fill"></span> 1
                    <a href="#" class="btn btn-primary">Like</a>
                </div>
            </div>
            </div>
            <div class='cardWrapper'>
            <div class="card  " id="newsCards" >
                <img id='newsCardImg' class="card-img-top" src={img2} alt="Card image cap" />
                <div class="card-body">
                    <h7 class="card-title text-danger text-danger text-danger text-danger">posted :1min ago</h7>
                    <p><h4 class="card-text">War in Russia </h4>Know the clashes of war going in russia ...</p>
                    <span class="bi bi-heart-fill"></span> 5
                    <a href="#" class="btn btn-primary">Like</a>
                </div>
            </div>
            </div>
            <div class='cardWrapper'>
            <div class="card  " id="newsCards" >
                <img id='newsCardImg' class="card-img-top" src={img3} alt="Card image cap" />
                <div class="card-body">
                    <h7 class="card-title text-danger text-danger text-danger text-danger">posted :6min ago</h7>
                    <p><h4 class="card-text">World Economy Influation</h4>Due to high influation ...</p>
                    <span class="bi bi-heart-fill"></span> 7
                    <a href="#" class="btn btn-primary">Like</a>
                </div>
            </div>
            </div>
            <div class='cardWrapper'>
            <div class="card  " id="newsCards" >
                <img id='newsCardImg' class="card-img-top" src={img4} alt="Card image cap" />
                <div class="card-body">
                    <h7 class="card-title text-danger text-danger text-danger text-danger">posted :3days ago</h7>
                    <p><h4 class="card-text">Suicude in Hyd</h4>After searching for a job from last 5 years ....</p>
                    <span class="bi bi-heart-fill"></span> 26
                    <a href="#" class="btn btn-primary">Like</a>
                </div>
            </div>
            </div>
            <div class='cardWrapper'>
            <div class="card  " id="newsCards" >
                <img id='newsCardImg' class="card-img-top" src={img5} alt="Card image cap" />
                <div class="card-body">
                    <h7 class="card-title text-danger text-danger text-danger text-danger">posted :3days ago</h7>
                    <p><h4 class="card-text">Corona cases</h4>Even after having vacination there ...</p>
                    <span class="bi bi-heart-fill"></span> 14
                    <a href="#" class="btn btn-primary">Like</a>
                </div>
            </div>
            </div>
            <div class='cardWrapper'>
            <div class="card  " id="newsCards" >
                <img id='newsCardImg' class="card-img-top" src={img6} alt="Card image cap" />
                <div class="card-body">
                    <h7 class="card-title text-danger text-danger text-danger">posted :1days ago</h7>
                    <p><h4 class="card-text">Protest in Delhi</h4>The on going protest day 4 updates ...</p>
                    <span class="bi bi-heart-fill"></span> 10
                    <a href="#" class="btn btn-primary">Like</a>
                </div>
            </div>
            </div>
            <div class='cardWrapper'>
            <div class="card  " id="newsCards" >
                <img id='newsCardImg' class="card-img-top" src={img7} alt="Card image cap" />
                <div class="card-body">
                    <h7 class="card-title text-danger text-danger text-danger">posted :1 ago</h7>
                    <p><h4 class="card-text">Murder in Hyd</h4>Murder in hyderabad will horrify you ...</p>
                    <span class="bi bi-heart-fill"></span> 17
                    <a href="#" class="btn btn-primary">Like</a>
                </div>
            </div>
            </div>
            <div class='cardWrapper'>
            <div class="card  " id="newsCards" >
                <img id='newsCardImg' class="card-img-top" src={img8} alt="Card image cap" />
                <div class="card-body">
                    <h7 class="card-title text-danger text-danger text-danger text-danger">posted :1Hrs ago</h7>
                    <p><h4 class="card-text ">Adani Business</h4>Adani groups are now back in business ...</p>
                    <span class="bi bi-heart-fill"></span> 100
                    <a href="#" class="btn btn-primary">Like</a>
                </div>
            </div>
            </div>
            <div class='cardWrapper'>
            <div class="card  " id="newsCards" >
                <img id='newsCardImg' class="card-img-top" src={img9} alt="Card image cap" />
                <div class="card-body">
                    <h7 class="card-title text-danger text-danger text-danger text-danger">posted :5Hrs ago</h7>
                    <p><h4 class="card-text">Mission to mars</h4>Budget of 5000cr for mission mars ...</p>
                    <span class="bi bi-heart-fill"></span> 7
                    <a href="#" class="btn btn-primary">Like</a>
                </div>
            </div>
            </div>
            <div class='cardWrapper'>
            <div class="card  " id="newsCards" >
                <img id='newsCardImg' class="card-img-top" src={img10} alt="Card image cap" />
                <div class="card-body">
                    <h7 class="card-title text-danger text-danger text-danger text-danger text-danger">posted :10min ago</h7>
                    <p><h4 class="card-text">Arrested</h4>Man arrested smoking weed in public ... </p>
                    <span class="bi bi-heart-fill"></span> 197
                    <a href="#" class="btn btn-primary">Like</a>
                </div>
            </div>
            </div>
        </div>
    )
}
export default MainSectionNews;