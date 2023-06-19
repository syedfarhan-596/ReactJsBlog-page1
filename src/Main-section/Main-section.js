import react from 'react';
import MainCenter from './Main-center/Main-center';
import Navigation from './Nav-section/Nav-section';
import MainAside from './Main-aside/Main-aside';
import MainSectionNews from './Main-section-news/Main-section-news';
import Blogs from './Blogs/Blogs'
import './Main-section.css';

const MainSection = ()=> {
    return(
        <div>
            <div className='wrapper1'>
                <Navigation />
                <MainCenter />
                <MainAside />
            </div>
            <MainSectionNews />
            <Blogs />
        </div>
    )
}
export default MainSection;