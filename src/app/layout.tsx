import type { Metadata } from "next";
import '../styles/globals.scss'

export const metadata: Metadata = {
  title: "Wählerbriefe",
  description: "Schreibe deinen Politiker an",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
        <body>
            <header className="header">
                <div className="container">
                    <h1 className='site-title'>Wählerbriefe</h1>
                </div>
            </header>
            {children}
            <footer className="footer">
                <div className="container">
                    <div className="footer__inner">
                        <span className="copy">&copy; 2024</span>
                        <ul className="footer__list">
                            <li className="footer__list-item">
                                <a className="footer__list-link" href="" title="Datenschutz" target="_blank" rel="noopener noreferrer">Datenschutz</a>
                            </li>
                            <li className="footer__list-item">
                                <a className="footer__list-link" href="" title="Impressum" target="_blank" rel="noopener noreferrer">Impressum</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </body>
    </html>
  );
}
