
import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation';
import { authOptions } from "./lib/auth";
import LandingPage from './LandingPage';

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect('/dashboard');
  }
  return <LandingPage />;
}
