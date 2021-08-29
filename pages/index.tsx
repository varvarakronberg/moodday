
import Head from 'next/head';
import Image from 'next/image';
import { SettingsProvider } from '../context/SettingsContext';
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import Controls from '../components/Controls';


export default function Home() {
    return (
        <>
            <Head>
                <title>Today I feel so...</title>
                <meta name="description" content="A place to share your current mood" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SettingsProvider>
                <AnimatedBackground>
                    <main style={{ textAlign: 'center', padding: '64px' }}>
                        <Header />
                        <Controls />
                    </main>
                </AnimatedBackground>
            </SettingsProvider>
        </>
    );
}