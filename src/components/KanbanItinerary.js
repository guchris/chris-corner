import React from 'react';

const FlightActivity = ({ route, flight, duration }) => (
    <div className="kanban-item">
        <p className="kanban-tag">Flight</p>
        <p className="kanban-route">{route}</p>
        <p className="kanban-flight">{flight}</p>
        <p className="kanban-duration">{duration}</p>
    </div>
);

const LodgingActivity = ({ title, address, gmaps, notes }) => (
    <div className="kanban-item">
        <p className="kanban-tag">Lodging</p>
        <p className="kanban-title">{title}</p>
        <a className="kanban-address" href={gmaps} target="_blank">{address}</a>
        <p className="kanban-notes">{notes}</p>
    </div>
);

const PlaceActivity = ({ title, address, gmaps, cost, description, notes }) => (
    <div className="kanban-item">
        <p className="kanban-tag">Place</p>
        <p className="kanban-title">{title}</p>
        <a className="kanban-address" href={gmaps} target="_blank">{address}</a>
        <p className="kanban-cost">{cost}</p>
        <p className="kanban-description">{description}</p>
        <p className="kanban-notes">{notes}</p>
    </div>
);

const KanbanItinerary = ({ itinerary }) => {
    return (
        <div className="kanban-board">
            {itinerary.map((day, index) => (
                <div className="kanban-column" key={index}>
                    <h3 className="kanban-column-header">{day.day}</h3>
                    <h4 className="kanban-column-caption">{day.date}</h4>
                    {day.activities.map((activity, idx) => {
                        switch (activity.tag) {
                            case 'Flight':
                                return <FlightActivity key={idx} {...activity} />;
                            case 'Lodging':
                                return <LodgingActivity key={idx} {...activity} />;
                            case 'Place':
                                return <PlaceActivity key={idx} {...activity} />;
                            default:
                                return null; // Or render a default component for unknown types
                        }
                    })}
                </div>
            ))}
        </div>
    );
};

export default KanbanItinerary;