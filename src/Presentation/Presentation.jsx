import React, {useState} from 'react';
import HeaderBar from './HeaderBar/HeaderBar';
import FooterBar from './FooterBar/FooterBar';
import Equipment from '../Equipment/Equipment';

import styles from './Presentation.module.css';

const Presentation = () => {
    const [equipment, setEquipment] = useState([
        {
            name: 'Frasco de vidrio',
            weight: 254,
            toggled: false
        },
        {
            name: 'Base de hule',
            weight: 21,
            toggled: false
        },
        {
            name: 'Tapa de hule',
            weight: 16,
            toggled: false
        },
        {
            name: 'Tolva',
            weight: 79,
            toggled: false
        },
        {
            name: 'Mecanismo de molino',
            weight: 103,
            toggled: false
        },
        {
            name: 'Frasco de prensa',
            weight: 316,
            toggled: false
        },
        {
            name: 'Mecanismo de prensa',
            weight: 113,
            toggled: false
        },
    ])
    const [totalWeight, setTotalWeight] = useState(0)

    const toggleEquipmentHandler = (equipmentIndex) => {
        const newEquipment = [...equipment]
        newEquipment[equipmentIndex].toggled = !newEquipment[equipmentIndex].toggled

        let newWeight = totalWeight
        newEquipment[equipmentIndex].toggled ? newWeight+=newEquipment[equipmentIndex].weight : newWeight-=newEquipment[equipmentIndex].weight;
        setTotalWeight(newWeight)
        setEquipment(newEquipment)
    }

    return (
        <div className={styles.PageContainer}>
            <div className={styles.Header}>
                <HeaderBar/>
            </div>
            <div className={styles.ContentWrap}>
                <Equipment equipment={equipment} toggler={toggleEquipmentHandler} totalWeight={totalWeight}/>
            </div>
            <div className={styles.Footer}>
                <FooterBar/>
            </div>
        </div>
    )
}

export default Presentation;