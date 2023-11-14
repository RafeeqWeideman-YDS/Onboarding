import React, { useEffect, useState } from 'react'
import styles from './SupaMotoScreens.module.scss';
import IconText from '@components/IconText/IconText';
import Profile from '@icons/profile.svg';
import Dob from './Dob';
import { useRenderScreen } from '@hooks/useRenderScreen';
import Footer from '@components/Footer/Footer';
import OnboardingLanguage from './OnboardingLanguage';

const Names = () => {
    const { currentScreen, switchToScreen } = useRenderScreen('names');
    const [firstName, setFirstName] = useState(localStorage.getItem('firstName') || '');
    const [lastName, setLastName] = useState(localStorage.getItem('lastName') || '');

    const handleFirstNameChange = (event: any) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event: any) => {
        setLastName(event.target.value);
    };

    const saveNamesToLocalStorage = () => {
        // const fullNamesToSave = `${firstName} ${lastName}`;
        // localStorage.setItem('storedNames', fullNamesToSave);
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
    };

    const renderScreen = () => {
        switch (currentScreen) {
            case 'names':
                return (
                    <div className={styles.onboardingComponent} >
                        <form className={styles.table} >
                            <div>
                                <IconText title='' Img={Profile} imgSize={50} />
                                <div>
                                    <label
                                        className={styles.label}
                                    >First Name</label><br />
                                    <input
                                        className={`${styles.inputs} ${styles['center-text']}`}
                                        type='text'
                                        placeholder='Name'
                                        value={firstName}
                                        onChange={handleFirstNameChange} />
                                </div><br />
                                <div>
                                    <label
                                        className={styles.label}
                                    >Last Name</label><br />
                                    <input
                                        className={`${styles.inputs} ${styles['center-text']}`}
                                        type='text'
                                        placeholder='Surname'
                                        value={lastName}
                                        onChange={handleLastNameChange} />
                                </div>
                            </div>
                        </form>
                        <Footer onBack={routeBack} onBackUrl='/' onForward={switchRoute} />
                    </div>
                );
            case 'date_of_birth':
                return <Dob />;
            case 'previous_route':
                return <OnboardingLanguage />
            default:
                return <>Empty</>;
        }
    }

    const switchRoute = () => {
        saveNamesToLocalStorage();
        switchToScreen('date_of_birth');
    };
    const routeBack = () => {
        switchToScreen('previous_route');
    };

    return renderScreen()
}

export default Names
