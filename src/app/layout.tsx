import type { Metadata } from "next";
import '../styles/globals.scss'

export const metadata: Metadata = {
  title: "waehlerbriefe.de",
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
                    <h1 className='site-title'>waehlerbriefe.de</h1>
                </div>
            </header>
            {children}
            <footer className="footer">
                <div className="container">
                    <div className="footer__inner">
                        <ul className="footer__list">
                            <li className="footer__list-item">
                                <a className="footer__list-link" href="https://github.com/waehlerbriefe/waehlerbriefe.github.io" title="Bearbeiten auf Github">Bearbeiten auf Github</a>
                            </li>
                            <li className="footer__list-item">
                                <a className="footer__list-link" href="https://dracoblue.net/privacy-policy/" title="Datenschutz" target="_blank" rel="noopener noreferrer">Datenschutz</a>
                            </li>
                            <li className="footer__list-item">
                                <a className="footer__list-link" href="https://dracoblue.net/about/#imprint" title="Impressum" target="_blank" rel="noopener noreferrer">Impressum</a>
                            </li>
                        </ul>
                        <span className="copy">© 2024 waehlerbriefe.de Team</span>
                    </div>
                </div>
            </footer>
        </body>
    </html>
  );
}
