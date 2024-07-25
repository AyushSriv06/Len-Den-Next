import React from 'react';
import LineChart from '../../../components/linechart';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../lib/auth';
import prisma from '@repo/db/client';


const getUser = async () => {
    try {
        const session = await getServerSession(authOptions);

        const user = await prisma.user.findUnique({
            where: {
                id: Number(session.user.id),
            },
            select: {
                name: true,
            },
        });

        return user?.name || 'No name found';
    } catch (error) {
        console.error('Error fetching user:', error);
        return 'Error fetching user';
    }
};
const App: React.FC = async () => {
    
    const userName = await getUser();
    const data = [65, 40, 20, 81, 56, 55, 40];
    const labels = ['Thu Jul 18 2024', 'Sun Jul 21 2024', 'Sun Jul 21 2024', 'April', 'May', 'June', 'July'];


    return (
        <div>
            <h1 className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
                Hello {userName} 👋
            </h1>
            <div className="min-h-screen flex items-center justify-center ml-40 pb-56 w-full max-w-4xl">
                <LineChart data={data} labels={labels} />
            </div>
        </div>
    );
};

export default App;
