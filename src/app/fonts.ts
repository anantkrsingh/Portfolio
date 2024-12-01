import { Jaro,Inconsolata,Rajdhani } from 'next/font/google'
import localFont from 'next/font/local';

export const rajdhani = Rajdhani({
    subsets: ['latin'],
    display: 'swap',
    weight:["300","400","500","600","700"]
})

export const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
export const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const okraSans = localFont({
    src: "./fonts/Okra-Bold.ttf",
    variable: "--font-okra-sans",
    weight: "100 900",
});
