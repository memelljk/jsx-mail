'use client';

import { NextUIProvider, Spinner } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Suspense } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen w-full">
            <Spinner />
          </div>
        }
      >
        {children}
        <ToastContainer closeOnClick theme="dark" position="bottom-right" />
      </Suspense>
    </NextUIProvider>
  );
}
