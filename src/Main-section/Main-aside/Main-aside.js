import react from 'react';
import job1 from './job1.jpg'
import job2 from './job2.jpg'
import job3 from './job3.jpg'
import job4 from './job4.jpg'
import job5 from './job5.jpg'
import job6 from './job6.jpg'
import job7 from './job7.jpg'
import job8 from './job8.jpg'
import job9 from './job9.jpg'
import job10 from './job10.jpg'
import './Main-aside.css';

const MainAside = () => {
    return(
        <div class="jobCardWrapper">
            <div class="card" id='card' >
                <img id='asideCardImg' class="card-img-top" src={job1} alt="Card image cap" />
                <div class="card-body">
                    <h7 class="card-title">posted: rajesh</h7>
                    <p><h4 class="card-text">BenQ </h4>Our company is hiring people from various fields</p>
                    <a href="#" class="btn btn-primary">Check Out</a>
                </div>
            </div>
            <div class="card" id='card' >
                <img id='asideCardImg' class="card-img-top" src={job2} alt="Card image cap" />
                <div class="card-body">
                    <h7 class="card-title">posted:syed</h7>
                    <p><h4 class="card-text">Honda </h4>Our company is hiring people from various fields</p>
                    <a href="#" class="btn btn-primary">Check Out</a>
                </div>
            </div>
            <div class="card" id='card' >
                <img id='asideCardImg' class="card-img-top" src={job3} alt="Card image cap" />
                <div class="card-body">
                    <h7 class="card-title">posted: maxell</h7>
                    <p><h4 class="card-text">Shelby </h4>Our company is hiring people from various fields</p>
                    <a href="#" class="btn btn-primary">Check Out</a>
                </div>
            </div>
            <div class="card" id='card' >
                <img id='asideCardImg' class="card-img-top" src={job4} alt="Card image cap" />
                <div class="card-body">
                    <h7 class="card-title">posted:khanna</h7>
                    <p><h4 class="card-text">Police</h4>Our company is hiring people from various fields</p>
                    <a href="#" class="btn btn-primary">Check Out</a>
                </div>
            </div>
            <div class="card" id='card' >
                <img id='asideCardImg' class="card-img-top" src={job5} alt="Card image cap" />
                <div class="card-body">
                    <h7 class="card-title">posted:reddy</h7>
                    <p><h4 class="card-text">Hospital</h4>Our company is hiring people from various fields</p>
                    <a href="#" class="btn btn-primary">Check Out</a>
                </div>
            </div>
            <div class="card" id='card' >
                <img id='asideCardImg' class="card-img-top" src={job6} alt="Card image cap" />
                <div class="card-body">
                    <h7 class="card-title">posted:reddy</h7>
                    <p><h4 class="card-text">Amazon</h4>Our company is hiring people from various fields</p>
                    <a href="#" class="btn btn-primary">Check Out</a>
                </div>
            </div>
            <div class="card" id='card' >
                <img id='asideCardImg' class="card-img-top" src={job7} alt="Card image cap" />
                <div class="card-body">
                    <h7 class="card-title">posted:reddy</h7>
                    <p><h4 class="card-text">Microsoft</h4>Our company is hiring people from various fields</p>
                    <a href="#" class="btn btn-primary">Check Out</a>
                </div>
            </div>
            <div class="card" id='card' >
                <img id='asideCardImg' class="card-img-top" src={job8} alt="Card image cap" />
                <div class="card-body">
                    <h7 class="card-title">posted:reddy</h7>
                    <p><h4 class="card-text">T-Hub</h4>Our company is hiring people from various fields</p>
                    <a href="#" class="btn btn-primary">Check Out</a>
                </div>
            </div>
            <div class="card" id='card' >
                <img id='asideCardImg' class="card-img-top" src={job9} alt="Card image cap" />
                <div class="card-body">
                    <h7 class="card-title">posted:reddy</h7>
                    <p><h4 class="card-text">Dmart</h4>Our company is hiring people from various fields</p>
                    <a href="#" class="btn btn-primary">Check Out</a>
                </div>
            </div>
            <div class="card" id='card' >
                <img id='asideCardImg' class="card-img-top" src={job10} alt="Card image cap" />
                <div class="card-body">
                    <h7 class="card-title">posted:reddy</h7>
                    <p><h4 class="card-text">Google </h4>Our company is hiring people from various fields</p>
                    <a href="#" class="btn btn-primary">Check Out</a>
                </div>
            </div>
        </div>
    )
}
export default MainAside;