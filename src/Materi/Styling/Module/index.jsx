import React from "react";
import style from './index.module.css';

export default class Module extends React.Component {

    render() {
        return(
            <div>
                <button className={`${style.btn} ${style.info}`}>Go Eduwork</button>
            </div>
        )
    }

}