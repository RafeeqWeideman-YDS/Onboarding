import React, { useEffect, useState } from 'react'
import styles from './SupaMotoScreens.module.scss';
import GenderSvg from '@icons/gender.svg';
import Male from '@icons/male.svg';
import MaleWhite from '@icons/male_white.svg';
import Female from '@icons/female.svg';
import FemaleWhite from '@icons/female_white.svg';
import IconText from '@components/IconText/IconText';
import { useRenderScreen } from '@hooks/useRenderScreen';
import Footer from '@components/Footer/Footer';
import Status from './Status';
import HouseHold from './HouseHold';

const Gender = () => {
    const [status, setStatus] = useState('');
    const { currentScreen, switchToScreen } = useRenderScreen('gender');

    useEffect(() => {
        const selectedGender = localStorage.getItem('selectedGender');
        if (selectedGender) {
            setStatus(selectedGender);
        }
    }, []);

    const handleStatusChange = (newStatus: React.SetStateAction<string>) => {
        const selectedGender = newStatus.toString();
        setStatus(newStatus);
        localStorage.setItem('selectedGender', selectedGender);
    };

    const renderScreen = () => {
        switch (currentScreen) {
            case 'gender':
                return (
                    <div className={styles.onboardingComponent} >
                        <IconText title='Gender' Img={GenderSvg} imgSize={120} />
                        <div></div>
                        <div className={styles.statusContainer} >
                            <button
                                className={styles.statusBtn}
                                style={{ backgroundColor: status === 'male' ? '#E0A714' : '#F0F0F0' }}
                                onClick={() => handleStatusChange('male')}
                            >
                                {status === 'male' ? (
                                    <MaleWhite style={{ width: '40px', height: '40px' }} />
                                ) : (
                                    <Male style={{ width: '40px', height: '40px' }} />
                                )}
                            </button>
                            <button
                                className={styles.statusBtn}
                                style={{ backgroundColor: status === 'female' ? '#E0A714' : '#F0F0F0' }}
                                onClick={() => handleStatusChange('female')}
                            >
                                {status === 'female' ? (
                                    <FemaleWhite style={{ width: '40px', height: '40px' }} />
                                ) : (
                                    <Female style={{ width: '40px', height: '40px' }} />
                                )}
                            </button>
                        </div>
                        <Footer onBack={routeBack} onBackUrl='/' onForward={switchRoute} />
                    </div>
                )
            case 'village':
                return <Status />
            case 'previous_route':
                return <HouseHold />
            default:
                return <>Empty</>;
        }
    }
    const switchRoute = () => {
        switchToScreen('village');
    };
    const routeBack = () => {
        switchToScreen('previous_route');
    };
    return renderScreen();
}

export default Gender;
