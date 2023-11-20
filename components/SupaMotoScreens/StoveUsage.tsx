import React, { useEffect, useState } from 'react';
import styles from './SupaMotoScreens.module.scss';
import Charcoal from '@icons/charcoal.svg';
import Home from '@icons/home.svg';
import HomeWhite from '@icons/home_white.svg';
import Store from '@icons/store.svg';
import StoreWhite from '@icons/store_white.svg';
import IconText from '@components/IconText/IconText';
import { useRenderScreen } from '@hooks/useRenderScreen';
import MonthlyCharcoalEx from './MonthlyCharcoalEx';
import CustomerId from './CustomerId';
import Footer from '@components/Footer/Footer';

const StoveUsage = () => {
    const [status, setStatus] = useState('');
    const [usage, setUsage] = useState("");
    const { currentScreen, switchToScreen } = useRenderScreen('stove_usage');

    useEffect(() => {
        const selectedUsage = localStorage.getItem('selectedUsage');
        if (selectedUsage) {
            setStatus(selectedUsage);
        }
    }, []);

    const handleStatusChange = (newStatus: string) => {
        setStatus(newStatus);
        setUsage(prevUsage => (prevUsage === 'Home' ? 'Commercial' : 'Home'));
        localStorage.setItem('selectedUsage', newStatus);
    };

    const renderScreen = () => {
        switch (currentScreen) {
            case 'stove_usage':
                return (
                    <div className={styles.onboardingComponent} >
                        <IconText title='Stove Usage' Img={Charcoal} imgSize={30} />
                        <div className={styles.table} >
                            <p style={{ color: '#E0A714' }} >{usage}</p>
                        </div>
                        <div className={styles.statusContainer} >
                            <button
                                className={styles.statusBtn}
                                style={{ backgroundColor: status === 'home' ? '#E0A714' : '#F0F0F0' }}
                                onClick={() => handleStatusChange('home')}
                            >
                                {status === 'home' ? (
                                    <HomeWhite style={{ width: '40px', height: '40px' }} />
                                ) : (
                                    <Home style={{ width: '40px', height: '40px' }} />
                                )}
                            </button>
                            <button
                                className={styles.statusBtn}
                                style={{ backgroundColor: status === 'commercial' ? '#E0A714' : '#F0F0F0' }}
                                onClick={() => handleStatusChange('commercial')}
                            >
                                {status === 'commercial' ? (
                                    <StoreWhite style={{ width: '40px', height: '40px' }} />
                                ) : (
                                    <Store style={{ width: '40px', height: '40px' }} />
                                )}
                            </button>
                        </div>
                        <Footer onBack={routeBack} onBackUrl='/' onForward={switchRoute} />
                    </div>
                )
            case 'customer_identification':
                return <CustomerId />;
            case 'previous_route':
                return <MonthlyCharcoalEx />
            default:
                return <>Empty</>;
        }
    }

    const switchRoute = () => {
        switchToScreen('customer_identification');
    };
    const routeBack = () => {
        switchToScreen('previous_route');
    };

    return renderScreen()
}

export default StoveUsage;
