import logo from '../assets/images/logo.png';
import classes from './Header.module.css';

export default function Header() {

  return (

    <div className="container">
        <div className={classes.header}>
            <div className={classes.logo}>
                <img src={logo} alt=""/>
            </div>
            <div className={classes.nav}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Types Of Honey</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
        </div>
    </div>
  );
}
