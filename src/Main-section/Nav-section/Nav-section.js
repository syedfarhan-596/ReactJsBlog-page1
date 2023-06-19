import react,{useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import classes from './Nav-section.module.css';


const Navigation = () =>{
    const [show,setShow] = useState(true)
    const [show1,setShow1] = useState(true)
    const [show2,setShow2] = useState(true)
    const [showAside,setShowAside] =useState(true)

    return(
        <Router>
        <div className={classes.aside}>
            {
                showAside?<span onClick={()=>setShowAside(false)} className={classes.closeArrow}><i class="bi bi-arrow-left-circle-fill"></i></span>:<i onClick={()=>setShowAside(true)} class="bi bi-arrow-right-circle-fill"></i>
            }
            {
                showAside?<div>
            <div>
                <button onClick={()=>setShow(!show)} className={classes.navBtn}>News <span class="bi bi-plus-square"></span></button>
                {
                    show?<div className={classes.toggleLinks}>
                    <Link to="">Technology News</Link>
                    <Link to="">World News</Link>
                    <Link to="">Entertainment News</Link>
                    <Link to="">Health News</Link>
                    <Link to="">Travel News</Link>
                    <Link to="">Sports News</Link>
                    <Link to="">Political News</Link>
                    </div>
                    : null
}

            </div>
            <div>
                <button onClick={()=>setShow1(!show1)} className={classes.navBtn}>Blogs <span class="bi bi-plus-square"></span></button>
                
                {
                    show1?<div className={classes.toggleLinks}>
                    <Link to="">Technology News</Link>
                    <Link to="">World News</Link>
                    <Link to="">Entertainment News</Link>
                    <Link to="">Health News</Link>
                    <Link to="">Travel News</Link>
                    <Link to="">Sports News</Link>
                    <Link to="">Political News</Link>
                    </div>
                    : null
}
            </div>
            <div>
                <button onClick={()=>setShow2(!show2)} className={classes.navBtn}>Jobss <span class="bi bi-plus-square"></span></button>
                {
                    show2?<div className={classes.toggleLinks}>
                    <Link to="">Customer Service </Link>
                    <Link to="">Healthcare </Link>
                    <Link to="">Education </Link>
                    <Link to="">Engineering </Link>
                    <Link to="">Administrative </Link>
                    <Link to="">Administrative </Link>
                    <Link to="">Technology </Link>
                </div>
                :null
}
            </div>
            </div>
            : null
            }
        </div>
        </Router>
    )
}
export default Navigation;