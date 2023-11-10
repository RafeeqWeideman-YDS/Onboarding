import React, { useEffect, useState } from 'react';
import styles from './SupaMotoScreens.module.scss';
import Phone from '@icons/phone.svg'
import IconText from '@components/IconText/IconText';
import { useRenderScreen } from '@hooks/useRenderScreen';
import Contract from './Contract';
import Footer from '@components/Footer/Footer';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import SMS from './SMS';

const PhoneNumber = () => {
    const { currentScreen, switchToScreen } = useRenderScreen('phone_number');
    const [phoneNumber, setPhoneNumber] = useState('');

    useEffect(() => {
        const storedPhoneNumber = localStorage.getItem('phoneNumber');
        if (storedPhoneNumber) {
            setPhoneNumber(storedPhoneNumber);
        }
    }, []);

    const handlePhoneNumberChange = (value: string | undefined) => {
        if (value !== undefined) {
            setPhoneNumber(value);
            localStorage.setItem('phoneNumber', value);
        }
    };

    const renderScreen = () => {
        switch (currentScreen) {
            case 'phone_number':
                return (
                    <div className={styles.onboardingComponent} >
                        <IconText title='Phone Number' Img={Phone} imgSize={30} />
                        <div className={styles.table} >
                            <PhoneInput
                                containerClass={styles.inputs}
                                containerStyle={{
                                    width: '350px',
                                    display: 'flex',
                                }}
                                buttonStyle={{
                                    borderStyle: 'none',
                                    height: '35px',
                                    top: '5px'
                                }}
                                inputStyle={{
                                    width: '300px',
                                    borderStyle: 'none',
                                    backgroundColor: '#F0F0F0'
                                }}
                                country={'us'}
                                value={phoneNumber}
                                onChange={handlePhoneNumberChange}
                            />
                        </div>
                        <Footer onBack={routeBack} onBackUrl='/' onForward={switchRoute} />
                    </div>
                )
            case 'contract':
                return <Contract />
            case 'previous_route':
                return <SMS />
        }
    }

    const switchRoute = () => {
        switchToScreen('contract');
    };

    const routeBack = () => {
        switchToScreen('previous_route');
    };

    return renderScreen()
}

export default PhoneNumber
