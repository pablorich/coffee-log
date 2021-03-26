import React from 'react';
import Item from '../Item/Item';

import styles from './Equipment.module.css';

const Equipment = (props) => {
    const items = props.equipment.map((item, index) => {
        return <Item {...item} key={index} toggler={() => props.toggler(index)}/>
    })
    return (
        <div className={styles.EquipmentPage}>
            <h2 className={styles.Title}>Equipo:</h2>
            <div className={styles.EquipmentContainer}>
                {items}
            </div>
            <h2 className={styles.Title}>Peso: {props.totalWeight}</h2>
        </div>
    )
}

export default Equipment;