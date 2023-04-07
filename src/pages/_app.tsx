import "@/styles/globals.css";
import { Lexend } from "next/font/google";
import type { AppProps } from "next/app";

const lexend = Lexend({ weight: ["400", "500", "600", "700"], subsets: ["latin"], variable: "--font-lexend" });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={`${lexend.variable} font-sans`}>
			<Component {...pageProps} />
		</main>
	);
}
