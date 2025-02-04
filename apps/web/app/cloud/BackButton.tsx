import { Button } from '@nextui-org/react';
import { HomeIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <Button
      isIconOnly
      onClick={() => router.push('/')}
      className="fixed top-5 left-5 z-50"
    >
      <HomeIcon />
    </Button>
  );
}
