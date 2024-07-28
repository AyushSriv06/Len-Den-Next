
import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation';
import { authOptions } from "./lib/auth";
import Image from 'next/image';

const features = [
  { title: 'Fast Transfers', description: 'Quick and reliable money transfers to anyone, anywhere.', icon: '/path/to/transfer-icon.png' },
  { title: 'P2P Payments', description: 'Secure peer-to-peer payments with no hidden fees.', icon: '/path/to/p2p-icon.png' },
  { title: 'Financial Tools', description: 'Tools and insights to help you manage your finances.', icon: '/path/to/tools-icon.png' },
];

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect('/dashboard');
  } else {
    return (
      <div className="min-h-screen bg-[#f8f9fa] flex flex-col items-center justify-between">
        <header className="w-full py-6 bg-white text-center shadow-md">
          <h1 className="text-4xl font-bold text-indigo-600">LeN-deN</h1>
          <p className="mt-2 text-gray-500">Financial Solutions for Everyone</p>
        </header>
        <main className="flex-1 w-full flex flex-col items-center px-4">
          <section className="text-center mt-16">
            <h2 className="text-5xl font-extrabold text-gray-900">Hello,</h2>
            <p className="mt-4 text-2xl text-gray-700">We Help You To Boost Your Business</p>
          </section>
          
          <section className="mt-16 w-full flex justify-center">
            <Image src="/path/to/center-figures.png" alt="Center Figures" width={600} height={400} />
          </section>
          
          <section className="mt-16 w-full px-8 py-16 bg-white shadow-md rounded-lg">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                  <Image src={feature.icon} alt={feature.title} width={60} height={60} />
                  <h3 className="mt-4 text-xl font-semibold text-gray-800">{feature.title}</h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
        
        <footer className="w-full py-4 bg-gray-800 text-white text-center">
          <p>© 2024 My Financial App. All rights reserved.</p>
        </footer>
      </div>
    );
  }
}
