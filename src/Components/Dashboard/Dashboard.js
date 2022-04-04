import React from 'react';
import { CartesianGrid, XAxis, YAxis, BarChart, Tooltip, Legend, Bar, LineChart, Line, ComposedChart, Area, AreaChart, PieChart, Pie, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const data = [
    {
        "month": "Mar",
        "investment": 100000,
        "sell": 241,
        "revenue": 10401
    },
    {
        "month": "Apr",
        "investment": 200000,
        "sell": 423,
        "revenue": 24500
    },
    {
        "month": "May",
        "investment": 500000,
        "sell": 726,
        "revenue": 67010
    },
    {
        "month": "Jun",
        "investment": 500000,
        "sell": 529,
        "revenue": 40405
    },
    {
        "month": "Jul",
        "investment": 600000,
        "sell": 601,
        "revenue": 50900
    },
    {
        "month": "Aug",
        "investment": 700000,
        "sell": 670,
        "revenue": 61000
    }
]

const Dashboard = () => {
    return (
        <section className="text-gray-600 body-font mx-12 mt-20">
            <h1 className="title-font sm:text-3xl text-center text-3xl uppercase mb-4 font-bold text-neutral-600">Welcome to DigitalTrend Dashboard</h1>
            <hr />
            <div className="container mx-auto flex m-12 px-12 md:flex-row flex-col items-center justify-between">
                <div className="mx-8 lg:flex-grow md:w-1/2 items-center justify-center">
                    <BarChart className='' width={420} height={200} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" fill="#8884d8" />
                        <Bar dataKey="sell" fill="#F24A72" />
                        <Bar dataKey="revenue" fill="#82ca9d" />
                    </BarChart>
                </div>
                <div className="mx-8 lg:flex-grow md:w-1/2 items-center justify-center">
                    <LineChart width={420} height={200} data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                        <Line type="monotone" dataKey="sell" stroke="#F24A72" />
                        <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                    </LineChart>
                </div>
            </div>

            <div className="container mx-auto flex m-12 px-12 md:flex-row flex-col items-center justify-between">
                <div className="mx-8 lg:flex-grow md:w-1/2 items-center justify-center">
                    <ComposedChart width={420} height={200} data={data}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Area type="monotone" dataKey="investment" fill="url(#colorUv)" stroke="#8884d8" />
                        <Bar dataKey="sell" barSize={20} fill="#F24A72" />
                        <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                    </ComposedChart>
                </div>
                <div className="mx-8 lg:flex-grow md:w-1/2 items-center justify-center">
                    <AreaChart width={420} height={200} data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="sell" stroke="#F24A72" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;