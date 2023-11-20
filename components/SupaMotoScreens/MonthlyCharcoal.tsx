import React, { useEffect, useState } from 'react'
import Charcoal from '@icons/charcoal.svg';
import styles from './SupaMotoScreens.module.scss';
import IconText from '@components/IconText/IconText';
import { useRenderScreen } from '@hooks/useRenderScreen';
import MonthlyCharcoalEx from './MonthlyCharcoalEx';
import MonthlySavings from './MonthlySavings';
import Footer from '@components/Footer/Footer';

const MonthlyCharcoal = () => {
    const [amount, setAmount] = useState(0);
    const { currentScreen, switchToScreen } = useRenderScreen('monthly_charcoal');

    useEffect(() => {
        const monthlyCharcoal = localStorage.getItem('monthlyCharcoal');
        if (monthlyCharcoal) {
            setAmount(parseInt(monthlyCharcoal, 10));
        }
    }, []);

    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let newAmount = parseInt(event.target.value, 10) + 5;
        newAmount = Math.min(newAmount, 1000);
        setAmount(newAmount);
        localStorage.setItem('monthlyCharcoal', newAmount.toString());
    };

    const renderScreen = () => {
        switch (currentScreen) {
            case 'monthly_charcoal':
                return (
                    <div className={styles.onboardingComponent} >
                        <IconText title='Monthly Charcoal Usage' Img={Charcoal} imgSize={30} />
                        <div className={styles.incomeOutput} >
                            <label className={styles.incomeInput} >{amount} kg Charcoal</label>
                        </div>
                        <div className={styles.table} >
                            <input
                                className={styles.monthlyIncome}
                                type="range"
                                id="amount"
                                name="amount"
                                min="0"
                                max="1000"
                                step="5"
                                value={amount}
                                onChange={handleAmountChange}
                            />
                        </div>
                        <Footer onBack={routeBack} onBackUrl='/' onForward={switchRoute} />
                    </div>
                )
            case 'monthly_charcoal_ex':
                return <MonthlyCharcoalEx />;
            case 'previous_route':
                return <MonthlySavings />
            default:
                return <>Empty</>;
        }
    }

    const switchRoute = () => {
        switchToScreen('monthly_charcoal_ex');
    };
    const routeBack = () => {
        switchToScreen('previous_route');
    };

    return renderScreen()
}

export default MonthlyCharcoal;
