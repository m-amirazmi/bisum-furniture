import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/header';

export default function Homepage() {
	return (
		<>
			<Head>
				<title>{process.env.TITLE} | Homepage</title>
			</Head>

			<Header />
			<div className="img-container">
				<Image src="/images/placeholders/hero.png" alt="Hero Banner" width={1920} height={600} />
			</div>
		</>
	);
}
