
import React from "react";
import styles from './Preloader.module.css';

const Preloader = ()=>{
    return(<div className={styles.SpinningPreloader_comp}>
        
        <div className={styles.Loading}>
            <div className={styles.circle}></div>
        </div>

    </div>)
};

export default Preloader;