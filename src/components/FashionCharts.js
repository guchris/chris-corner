"use client"
import React from 'react';
import { Line, Pie, Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const FashionCharts = ({ closetData }) => {

    const getTimelineData = () => {
        const timeline = {};
        closetData.forEach(item => {
            // Parse the date from the JSON data
            const date = new Date(item.date);
            if (!isNaN(date.getTime())) {  // Check if the date is valid
                // Format the date as "YYYY-MM" to aggregate by month
                const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
                timeline[formattedDate] = (timeline[formattedDate] || 0) + 1;
            } else {
                console.warn(`Invalid date for item: ${item.name}`);  // Optionally log the invalid date
            }
        });
        const labels = Object.keys(timeline).sort();  // Sort the months
        const data = labels.map(date => timeline[date]);
        return { labels, data };
    };

    const getSpendingData = () => {
        const spendingTimeline = {};
        closetData.forEach(item => {
            const date = new Date(item.date);
            const cost = parseFloat(item.cost.replace('$', ''));
            if (!isNaN(date.getTime()) && !isNaN(cost)) {
                const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
                spendingTimeline[formattedDate] = (spendingTimeline[formattedDate] || 0) + cost;
            } else {
                console.warn(`Invalid date or cost for item: ${item.name}`);
            }
        });
        const labels = Object.keys(spendingTimeline).sort();
        const data = labels.map(date => spendingTimeline[date]);
        return { labels, data };
    };

    const getTopBrandsData = () => {
        const brandCounts = {};
        closetData.forEach(item => {
            const brand = item.brand || 'Unknown';
            brandCounts[brand] = (brandCounts[brand] || 0) + 1;
        });

        const sortedBrands = Object.entries(brandCounts)
            .sort(([, a], [, b]) => b - a) // Sort by quantity descending
            .slice(0, 10); // Take top 10 brands

        const labels = sortedBrands.map(([brand]) => brand);
        const data = sortedBrands.map(([, count]) => count);

        return { labels, data };
    };

    const getPieChartData = () => {
        const categoryCounts = { Tops: 0, Bottoms: 0, Accessories: 0 };
        closetData.forEach(item => {
            if (item.category.includes('Tops')) {
                categoryCounts.Tops += 1;
            } else if (item.category.includes('Bottoms')) {
                categoryCounts.Bottoms += 1;
            } else if (item.category.includes('Accessories')) {
                categoryCounts.Accessories += 1;
            }
        });
        return {
            labels: Object.keys(categoryCounts),
            datasets: [
                {
                    data: Object.values(categoryCounts),
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                },
            ],
        };
    };

    const timelineData = getTimelineData();
    const spendingData = getSpendingData();
    const topBrandsData = getTopBrandsData();
    const pieChartData = getPieChartData();

    return (
        <div>
            <h4 className="section-subtitle">Items Over Time</h4>
            <div className="chart-container">
                <Line
                    data={{
                        labels: timelineData.labels,
                        datasets: [
                            {
                                label: '# Items',
                                data: timelineData.data,
                                fill: false,
                                backgroundColor: '#36A2EB',
                                borderColor: '#36A2EB',
                            },
                        ],
                    }}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                    }}
                />
            </div>

            <h4 className="section-subtitle">Money Spent Over Time</h4>
            <div className="chart-container">
                <Line
                    data={{
                        labels: spendingData.labels,
                        datasets: [
                            {
                                label: '$ USD',
                                data: spendingData.data,
                                fill: false,
                                backgroundColor: '#FF6384',
                                borderColor: '#FF6384',
                            },
                        ],
                    }}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                    }}
                />
            </div>

            <h4 className="section-subtitle">Top 10 Brands by Quantity</h4>
            <div className="chart-container">
                <Bar
                    data={{
                        labels: topBrandsData.labels,
                        datasets: [
                            {
                                label: '# Items',
                                data: topBrandsData.data,
                                backgroundColor: '#36A2EB',
                            },
                        ]
                    }}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            y: {
                                beginAtZero: true,
                            },
                        },
                    }}
                />
            </div>

            <h4 className="section-subtitle">Category Breakdown</h4>
            <div className="chart-container">
                <Pie
                    data={pieChartData}
                    options={{
                        maintainAspectRatio: false,
                        responsive: true,
                        width: 300,
                        height: 300,
                    }}
                />
            </div>
        </div>
    );

};

export default FashionCharts;