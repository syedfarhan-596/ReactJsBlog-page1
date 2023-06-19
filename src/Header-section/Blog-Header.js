import react,{useState} from 'react'
import classes from './Blog-Header.module.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import '../Main-section/Blogs/Blogs';
import logo from './myLogo.png';
const HeaderSection = () => {
    const [show,setState] = useState(false)
    return(
    <Router>
        <div className={classes.wrapper}>
            <div className={classes.title}>
                <img className={classes.logoImg} src={logo} alt="logo" />
                    <Link className={classes.a} to="#newsCardImg">
                        NEWS
                    </Link>
                    <Link className={classes.a} to="#blogs">
                        BLOGS
                    </Link>
                    <Link className={classes.a} to="#newsCardImg">
                        RECENT
                    </Link>
            </div>
            <div className={classes.menuHeader}>
                <div className={classes.openCloseBtn}>
                    {
                        show?<button onClick={()=>setState(false)} className={classes.close}><i>x</i></button>:<i onClick={()=>setState(true)} class=" bi bi-list"></i>
                    }
                    
                </div>
                <div className={classes.toggleItems}>
                {
                    show?<div>
                <Link className={classes.toggle} to="#aboutUs">
                    About
                 </Link>
                <Link className={classes.toggle} to="#aboutUs">
                    Contact
                </Link>
                <Link className={classes.toggle} to="#aboutUs">
                    Help
                </Link>
            </div>:null}
                </div>
            </div>    
        </div>
    </Router>
    )
}
export default HeaderSection;