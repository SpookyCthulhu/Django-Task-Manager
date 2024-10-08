'use client';  // Add this line at the very top

import { createContext, useState, ReactNode } from 'react';
import './globals.css';

interface AuthContextProps {
  token: string;
  setToken: (token: string) => void;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [token, setToken] = useState<string>('');

  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        <AuthContext.Provider value={{ token, setToken }}>
          {children}
        </AuthContext.Provider>
      </body>
    </html>
  );
}

