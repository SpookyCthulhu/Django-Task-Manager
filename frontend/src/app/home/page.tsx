'use client';

import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../layout';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [message, setMessage] = useState<string>('');
  const authContext = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!authContext?.token) {
      router.push('/login');
      return;
    }

    const fetchMessage = async () => {
      const response = await fetch('http://127.0.0.1:8000/', {
        headers: {
          Authorization: `Bearer ${authContext.token}`,
        },
      });
      const data = await response.json();
      setMessage(data.message);
    };

    fetchMessage();
  }, [authContext, router]);

  return <h1 className="text-center text-2xl mt-20">{message || 'Loading...'}</h1>;
}

