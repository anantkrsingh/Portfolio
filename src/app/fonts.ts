import { Jaro, Inconsolata, Rajdhani, Geist_Mono } from 'next/font/google'
import localFont from 'next/font/local';

export const rajdhani = Rajdhani({
    subsets: ['latin'],
    display: 'swap',
    weight: ["300", "400", "500", "600", "700"]
})

export const geistMono = Geist_Mono({
    subsets: ['latin'],
    display: 'swap',
    weight: ["300", "400", "500", "600", "700"]
})



export const okraSans = localFont({
    src: "./fonts/Okra-Bold.ttf",
    variable: "--font-okra-sans",
    weight: "100 900",
});
