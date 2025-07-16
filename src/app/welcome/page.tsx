import { Metadata } from 'next';
import WelcomePage from '@/components/WelcomePage';

export const metadata: Metadata = {
  title: 'Welcome to Guinevere',
  description: 'Welcome to Guinevere - Login or create your account',
};

export default function Welcome() {
  return <WelcomePage />;
}