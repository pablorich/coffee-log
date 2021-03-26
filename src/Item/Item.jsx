import React from 'react';

import styles from './Item.module.css';

const Item = (props) => {
    return (
        <div onClick={()=>props.toggler(props.key)} className={props.toggled ? styles.Item_selected : styles.Item}>
            <p>{props.name}</p>
            <p>Peso: {props.weight}</p>
        </div>
    )
}

export default Item;