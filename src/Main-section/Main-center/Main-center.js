import react from 'react'
import stockImg from './stocks.jpg'
import './Main-center.css';

const MainCenter = () =>{
    return(
        <div className='mainContainer'>
          <div class="card">
              <img class="card-img-top" src={stockImg} alt="Card image cap" />
            <div class="card-body">
              <h7 class="card-title"> posted: 5mins ago</h7>
              <h4 class="card-text">Current stock update</h4>
              <p class="discription">Bank nifty goes crash as adani business had a majar crash due the documenty by the BBC new where it has the aligation of cheating, Any how those alligation are not proven for the time period</p>
              <a href="#" class="btn btn-primary">Read More</a>
            </div>
        </div>
        </div>
    )
}

export default MainCenter;