import styled from 'styled-components';
import { MapContainer } from 'react-leaflet';

export const StyledMapContainer = styled(MapContainer)`
    height: 100%;
    .leaflet-popup-content h2 {
        color: #e7816b;
    }
    .leaflet-popup-content p {
        margin: 0;
    }
`;