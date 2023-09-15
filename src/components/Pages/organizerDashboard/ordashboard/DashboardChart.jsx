import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const DashboardChart = () => {
    const data = [
        { name: 'January', value: 30 },
        { name: 'February', value: 10 },
        { name: 'March', value: 45 },
        { name: 'April', value: 55 },
        { name: 'May', value: 25 },
        { name: 'June', value: 70 },
        { name: 'July', value: 80 },
    ];
    return (
        <div>
            <LineChart width={600} height={400} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </div>
    );
};

export default DashboardChart;