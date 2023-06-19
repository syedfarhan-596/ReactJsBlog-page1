import react from 'react';
import classes from './App.module.css';
import BlogHeader from './Header-section/Blog-Header';
import MainSection from './Main-section/Main-section';
import Footer from './Footer-section/Footer';
function App() {
  return (
    <div className={classes.App}>
      <BlogHeader />
      <MainSection />
      <Footer />
    </div>
  );
}
export default App;