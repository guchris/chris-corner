import React from 'react';

const FashionStats = ({ closetData }) => {
    // Calculate statistics
    const calculateStats = () => {
        const stats = {
            total: 0,
            new: 0,
            used: 0,
            tops: 0,
            bottoms: 0,
            accessories: 0,
            totalSpent: 0
        };

        closetData.forEach(item => {
            stats.total += 1;
            stats.totalSpent += parseFloat(item.cost.replace('$', ''));
            
            if (item.category.includes('Tops')) {
                stats.tops += 1;
            } else if (item.category.includes('Bottoms')) {
                stats.bottoms += 1;
            } else if (item.category.includes('Accessories')) {
                stats.accessories += 1;
            }


            if (item.condition === 'New') {
                stats.new += 1;
            } else if (item.condition === 'Used') {
                stats.used += 1;
            }
        });

        return stats;
    };

    const stats = calculateStats();

    return (
        <div className="section-skinny">
            <div className="body-upper"><b>Total: </b>{stats.total}</div>
            <div className="body-upper"><b>New: </b>{stats.new}</div>
            <div className="body-upper"><b>Used: </b>{stats.used}</div>
            <div className="body-upper"><b>Tops: </b>{stats.tops}</div>
            <div className="body-upper"><b>Bottoms: </b>{stats.bottoms}</div>
            <div className="body-upper"><b>Accessories: </b>{stats.accessories}</div>
            <div className="body-upper"><b>Total Spent: $</b>{stats.totalSpent.toFixed(2)}</div>
        </div>
    );
};

export default FashionStats;