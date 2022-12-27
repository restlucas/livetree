import React from 'react'

import cardOne from '../../assets/cards/card_1.jpg';
import cardTwo from '../../assets/cards/card_2.jpg';
import cardThree from '../../assets/cards/card_3.jpg';
import Threes from '../../assets/threes.svg';

import styles from './OurMission.module.css';

const OurMission = () => {
  return (
    <section className={`${styles.ourMissionContainer}`}>
        <div className={styles.ourMission}>
            <h1 className={styles.ourMissionTitle}>Our mission is</h1>
            <div className={styles.ourMissionContent}>
                <div className={styles.cardImage} style={{ background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(${cardOne}) `}}>
                    <h1>Restoration of degraded areas</h1>
                    <p>The restoration of degraded areas is a real and important way to conserve Brazilian biomes!</p>
                </div>

                <div className={styles.cardImage} style={{ background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(${cardTwo})`}}>
                    <h1>Take care of the native flora</h1>
                    <p>We invest in research and scientific production, we search and register endangered species in the Araucaria Forest</p>
                </div>

                <div className={styles.cardImage} style={{ background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(${cardThree})`}}>
                    <h1>Change the world, adopt a seedling</h1>
                    <p>The Chauá Nursery prioritizes the production of rare and endangered plants, also valuing ornamental, medicinal and food species.</p>
                </div>
            </div>
            <div className={styles.threeSvg}>
                <img src={Threes} alt="Threes" />
            </div>
            
            <p className={styles.ourMissionText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ornare ipsum. Sed quis commodo orci. Aliquam eget pharetra sem, nec pulvinar tortor. Praesent in maximus arcu. Donec iaculis ornare neque nec hendrerit. Nulla mauris erat, finibus ac lectus a, consequat mollis nisi. Praesent ac ex sed purus vulputate blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec odio ac erat finibus maximus. Ut in neque posuere, elementum tortor in, pretium odio. Nulla diam arcu, tincidunt sit amet risus a, finibus hendrerit felis.
                    <br />
                    <br />
                    Vivamus ac arcu a massa sodales hendrerit. Curabitur ullamcorper condimentum fermentum. Aliquam ornare turpis libero, non euismod felis placerat quis. Suspendisse neque lectus, commodo at porttitor in, interdum volutpat arcu. Etiam condimentum mauris a nunc luctus interdum. Integer a tortor mi. Suspendisse imperdiet sit amet purus sed tempor. In dictum ornare nisl. Cras id purus vitae dolor posuere tristique quis vel ex. Pellentesque sed gravida velit. Nunc porta accumsan erat vitae tincidunt. Curabitur ut molestie nisl. Ut ut eleifend justo. Nulla quis ultrices ante. Donec ac odio in enim sollicitudin sagittis id accumsan purus. Praesent tempor aliquet accumsan.
                    <br />
                    <br />
                    In viverra sed odio sed vulputate. Maecenas at quam nec purus tempus tincidunt. Donec molestie elit risus, malesuada ultricies lacus auctor id. Proin feugiat justo vel porttitor ultricies. Quisque a odio id eros aliquet fermentum sit amet id arcu. Morbi venenatis dui sem, ac sagittis nisi volutpat a. Sed neque erat, fringilla id ligula nec, fermentum finibus eros. Aenean eget neque odio. In aliquet vulputate enim, sit amet sagittis leo iaculis ut.
                </p>
        </div>
    </section>
  )
}

export default OurMission