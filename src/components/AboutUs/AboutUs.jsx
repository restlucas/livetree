import React from 'react'

import styles from './AboutUs.module.css'

import aboutUsImg from '../../assets/card_main_3.jpg';

const AboutUs = () => {
  return (
    <section className={`container ${styles.aboutUs}`}>
        <div>
            <h1>About us</h1>
            <img src={aboutUsImg} alt="About us" />
        </div>
        <div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur metus dictum libero sagittis, eu malesuada arcu finibus. Nullam nec nunc sit amet tellus efficitur sollicitudin. Morbi semper justo tortor, et gravida risus lobortis in. Cras in pretium neque, eget facilisis nisl. Praesent rhoncus eu ex in porta. Ut malesuada euismod tellus. Nunc sit amet vulputate nibh, et mollis justo. Ut at ante dignissim, facilisis dui ut, rutrum arcu. Ut id purus risus. Cras vehicula, turpis quis imperdiet pretium, velit nisl convallis arcu, id sollicitudin mauris sapien a purus. Ut at sem ligula.
            <br />
            <br />
            Suspendisse mauris metus, commodo vel laoreet vitae, vestibulum eu libero. Nam rutrum, tortor sit amet ultricies rutrum, magna orci vestibulum tellus, sit amet interdum magna lectus nec sem. Sed molestie dignissim nunc sed fermentum. Maecenas tortor sapien, laoreet vitae facilisis pellentesque, ornare quis nunc. Nulla consequat, mauris euismod accumsan ultricies, urna sem tempus sem, eget egestas mauris elit ac quam. Sed at nisi ultricies, hendrerit dui ut, efficitur diam. Nulla pulvinar dui at dolor facilisis auctor. Suspendisse ac nunc rhoncus, consequat felis non, dignissim ex. Aenean iaculis felis a vulputate molestie. Morbi dui massa, sodales id eros eget, finibus tincidunt metus. Pellentesque tincidunt varius tortor elementum facilisis. Nullam nec sapien nec nisl ultricies rutrum eget ac dui. Morbi odio quam, varius at mauris vitae, bibendum sollicitudin lorem. Aliquam sed tellus efficitur lorem bibendum tempus ac in urna. Nam turpis ante, fermentum in cursus vitae, molestie volutpat dolor. Proin eu dictum ligula, id dictum velit.
            </p>
        </div>
    </section>
  )
}

export default AboutUs