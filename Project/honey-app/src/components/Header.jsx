import logo from '../assets/images/logo.png';
import classes from './Header.module.css';


export default function Header() {


  return (

    // <div className="container">
        <div className={classes.header}>
            <div className={classes.logo}>
                <img src={logo} alt=""/>
            </div>
            <div className={classes.nav}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({
                            top:document.querySelector('.about-us').offsetTop,
                            behavior: 'smooth',
                        })
                    }}><a href="#">About Us</a></li>
                    <li onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({
                            top:document.querySelector('.types-of-honey').offsetTop,
                            behavior: 'smooth',
                        })
                    }}><a href="#">Types Of Honey</a></li>
                    <li onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({
                            top:document.querySelector('.blog').offsetTop,
                            behavior: 'smooth',
                        })
                    }}><a href="#">Blog</a></li>
                </ul>
            </div>
            <div className={classes.user}>
                <ul>
                <li><a href="#">Register</a></li>
                <li><a href="#">Login</a></li>
                </ul>
            </div>
        </div>
    // </div>
  );
}
