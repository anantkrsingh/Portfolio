import { Jaro, Inconsolata, Rajdhani } from 'next/font/google'
import localFont from 'next/font/local';
import {GeistMono} from "geist/font/mono"
export const rajdhani = Rajdhani({
    subsets: ['latin'],
    display: 'swap',
    weight: ["300", "400", "500", "600", "700"]
})

export const geistMono = GeistMono

export const okraSans = localFont({
    src: "./fonts/Okra-Bold.ttf",
    variable: "--font-okra-sans",
    weight: "100 900",
});
