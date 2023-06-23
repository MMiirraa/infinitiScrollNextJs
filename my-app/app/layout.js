"use client"
import Provider from './libs/context'
import './globals.css'

export default function RootLayout({ children }) {

    return (
        <html lang="ru">
            <body>
                <Provider>
                    {children}
                </Provider>
            </body>
        </html>
    )
}
