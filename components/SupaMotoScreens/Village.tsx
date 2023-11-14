import React, { useEffect, useState } from 'react'
import styles from './SupaMotoScreens.module.scss';
import VillageSvg from '@icons/village.svg';
import IconText from '@components/IconText/IconText';
import Footer from '@components/Footer/Footer';
import { useRenderScreen } from '@hooks/useRenderScreen';
import Verbal from './Verbal';
import Coordinates from './Coordinates';

const Village = () => {
    const { currentScreen, switchToScreen } = useRenderScreen('village');
    const [village, setVillage] = useState('');

    useEffect(() => {
        const storedVillage = localStorage.getItem('selectedVillage');
        if (storedVillage) {
            setVillage(storedVillage);
        }
    }, []);

    const handleVillageChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = event.target.value;
        setVillage(value);
        localStorage.setItem('village', value);
    };

    const renderScreen = () => {
        switch (currentScreen) {
            case 'village':
                return (
                    <div className={styles.onboardingComponent} >
                        <IconText title='Village' Img={VillageSvg} imgSize={70} />
                        <div className={styles.table} >
                            <input
                                className={`${styles.inputs} ${styles['center-text']}`}
                                type='text'
                                value={village}
                                onChange={handleVillageChange} />
                        </div>
                        <Footer onBack={routeBack} onBackUrl='/' onForward={switchRoute} />
                    </div>
                )
            case 'verbal':
                return <Verbal />
            case 'previous_route':
                return <Coordinates />
            default:
                return <>Empty</>;
        }
    }
    const switchRoute = () => {
        localStorage.setItem('selectedVillage', village);
        switchToScreen('verbal');
    };
    const routeBack = () => {
        switchToScreen('previous_route');
    };
    return renderScreen();
}

export default Village
