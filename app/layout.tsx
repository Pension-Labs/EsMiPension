import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Es mi pension',
	description: 'Es mi pension',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Script
				strategy="afterInteractive"
				src={`https://www.googletagmanager.com/gtag/js?id=G-VWKFYB4JSZ`}
			/>
			<Script
				id="gtag-init"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VWKFYB4JSZ');
          `,
				}}
			/>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
