import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface Props {
    data: any
}


const BarGraphic = ({ data }: Props) => {


    return (
        <div className='flex flex-col items-center mt-16'>

            <div className='border-4 border-purple-800 rounded-2xl bg-white'>

                <div >
                    <BarChart width={600} height={450} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="asteroides" fill="#8884d8" />
                    </BarChart>
                </div>
            </div>

        </div>

    );
};

export default BarGraphic;
