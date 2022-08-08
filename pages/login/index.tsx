import type { NextPage } from 'next';
import Head from 'next/head';
import cls from 'classnames';

import utilsStyles from '@styles/utils.module.scss';
import Header from '@components/header/header';
import Footer from '@components/footer/footer';
import Link from 'next/link';
import ButtonRound, { BUTTON_ROUND_SIZE } from '@components/button-round/button-round';
import StartFull from '@icons/star_full.svg';
import Download from '@icons/download.svg';

const Login: NextPage = () => {
	return (
		<>
			<Head>
				<title>EarthDay</title>
				<meta name="description" content="EarthDay" />
			</Head>

			<Header pageTitle="Login" />

			<main className={cls(utilsStyles.main, utilsStyles.columnSpaceEvenlyCentered)}>
				<Link href="/login/create-wallet">
					<a>
						<ButtonRound label="Create new wallet" size={BUTTON_ROUND_SIZE.large}>
							<StartFull width="50px" height="50px" />
						</ButtonRound>
					</a>
				</Link>
				<Link href="/login/import-wallet">
					<a>
						<ButtonRound label="Import existing wallet" size={BUTTON_ROUND_SIZE.large}>
							<Download width="50px" height="50px" />
						</ButtonRound>
					</a>
				</Link>
			</main>

			<Footer onBackUrl="/" />
		</>
	);
};

export default Login;