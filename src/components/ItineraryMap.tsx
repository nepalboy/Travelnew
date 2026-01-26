import React from 'react';
import { MapPin, Mountain, Wind, Home, Coffee, Plane, Thermometer, Footprints } from 'lucide-react';
import './ItineraryMap.css';

interface Waypoint {
    date: string;
    location: string;
    elevation: string;
    icon: React.ReactNode;
}

const waypoints: Waypoint[] = [
    { date: 'Dec 28', location: 'Arrive Mendoza', elevation: '2,493 ft', icon: <Plane size={16} /> },
    { date: 'Dec 29', location: 'Penitentes', elevation: '8,940 ft', icon: <Coffee size={16} /> },
    { date: 'Dec 30', location: 'Pampa De Leñas', elevation: '9,186 ft', icon: <Footprints size={16} /> },
    { date: 'Dec 31', location: 'Casa De Piedra', elevation: '10,662 ft', icon: <MapPin size={16} /> },
    { date: 'Jan 01', location: 'Plaza Argentina', elevation: '13,780 ft', icon: <Mountain size={16} /> },
    { date: 'Jan 02', location: 'Plaza Argentina', elevation: '13,780 ft', icon: <Mountain size={16} /> },
    { date: 'Jan 03', location: 'Camp 1 (Carry)', elevation: '16,240 ft', icon: <Footprints size={16} /> },
    { date: 'Jan 04', location: 'Plaza Argentina', elevation: '13,780 ft', icon: <Mountain size={16} /> },
    { date: 'Jan 05', location: 'Camp 1 (Move)', elevation: '16,240 ft', icon: <Thermometer size={16} /> },
    { date: 'Jan 06', location: 'Camp 2 (Carry)', elevation: '18,044 ft', icon: <Footprints size={16} /> },
    { date: 'Jan 07', location: 'Camp 2 (Move)', elevation: '18,044 ft', icon: <Wind size={16} /> },
    { date: 'Jan 08', location: 'Camp 2', elevation: '18,044 ft', icon: <Wind size={16} /> },
    { date: 'Jan 09', location: 'Camp 3 (Carry)', elevation: '19,685 ft', icon: <Footprints size={16} /> },
    { date: 'Jan 10', location: 'Camp 3 (Move)', elevation: '19,685 ft', icon: <Wind size={16} /> },
    { date: 'Jan 11', location: 'Summit Day', elevation: '22,841 ft', icon: <Mountain size={18} /> },
    { date: 'Jan 12', location: 'Plaza De Mulas', elevation: '14,402 ft', icon: <Home size={16} /> },
    { date: 'Jan 13', location: 'Return Mendoza', elevation: '2,493 ft', icon: <Home size={16} /> },
    { date: 'Jan 14', location: 'Mendoza (Rest)', elevation: '2,493 ft', icon: <Home size={16} /> },
    { date: 'Jan 15', location: 'Mendoza (Rest)', elevation: '2,493 ft', icon: <Home size={16} /> },
    { date: 'Jan 16', location: 'Return Flight', elevation: '2,493 ft', icon: <Plane size={16} /> },
];

const ItineraryMap: React.FC = () => {
    return (
        <div className="itinerary-map-card">
            <h3>Elevation Trace</h3>
            <div className="vertical-itinerary-container">
                {waypoints.map((point, index) => (
                    <div key={index} className="itinerary-item">
                        <div className="itinerary-left">
                            <span className="itinerary-date">{point.date}</span>
                        </div>
                        <div className="itinerary-center">
                            <div className="itinerary-dot">
                                {point.icon}
                            </div>
                            {index !== waypoints.length - 1 && <div className="itinerary-line"></div>}
                        </div>
                        <div className="itinerary-right">
                            <div className="itinerary-location">{point.location}</div>
                            <div className="itinerary-elevation">{point.elevation}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="itinerary-footer">
                * Complete 20-Day Elevation Log
            </div>
        </div>
    );
};

export default ItineraryMap;
