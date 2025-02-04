'use client';

import handleRedirectUrl from '@/app/utils/handle-redirect-url';
import { Button, Card, CardBody, CardHeader, Input } from '@nextui-org/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import BackButton from '../BackButton';

export default function Page() {
  const [redirect, setRedirect] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const email = formData.get('email') as string;

      if (!email) {
        return;
      }

      const url = `/cloud/security-code?permission=self:reset-password&email=${email}&redirect=${encodeURIComponent(`/cloud/password-reset?redirect=${redirect}`)}`;

      router.push(url);
    },
    [redirect, router],
  );

  useEffect(() => {
    if (!searchParams) {
      router.push('/cloud/sign-up');
      return;
    }

    setRedirect(handleRedirectUrl(searchParams));
  }, [searchParams, router]);

  return (
    <main className="h-screen w-full flex justify-center items-center">
      <BackButton />
      <Card className="w-11/12 md:w-[400px]">
        <CardHeader className="flex flex-col">
          <h1 className="text-xl font-bold">Password recovery</h1>
          <p className="text-sm text-gray-500 text-center">
            Please enter your email below and we will send you a code to reset
            your password
          </p>
        </CardHeader>
        <CardBody>
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-5 items-center"
          >
            <Input
              isRequired
              type="email"
              name="email"
              label="Email"
              placeholder="Enter your email"
              className="w-full text-center"
            />
            <Button color="primary" fullWidth type="submit">
              Send code
            </Button>
          </form>
        </CardBody>
      </Card>
    </main>
  );
}
