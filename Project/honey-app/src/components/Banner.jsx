import style from './Banner.module.css';
import h2 from '../assets/images/h2.png';

export default function Banner() {
    return (

        <div className={style.banner}>

        <div className={style.heroBanner}>
            <div className={style.container}>
                <div className={style.bannerInfo}>
                    <h1>Natural Honey</h1>
                    <h1 className={style.redText}>Blog</h1>
                    <p>There are many different varieties of flower honey available… Lorem ipsum dolor sit amet,
                        consectetur
                        adipiscing elit. Nullam ac laoreet lacus. Morbi auctor quam tempus massa vestibulum aliquet eu
                        vitae
                        ligula. </p>
                </div>
                <div className={style.bannerImage}>
                    <img src={h2} alt=""/>
                </div>
            </div>
        </div>
    </div>
    )
}
