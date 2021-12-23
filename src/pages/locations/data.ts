import { LatLngTuple } from 'leaflet';
import locationCanadaM from '../../assets/locations/tablet/image-map-canada.png';
import locationAustraliaM from '../../assets/locations/tablet/image-map-australia.png';
import locationUKM from '../../assets/locations/tablet/image-map-uk.png';
import locationCanadaL from '../../assets/locations/desktop/image-map-canada.png';
import locationAustraliaL from '../../assets/locations/desktop/image-map-australia.png';
import locationUKL from '../../assets/locations/desktop/image-map-uk.png';
import threeCircle from '../../assets/shared/desktop/bg-pattern-three-circles.svg';

export interface IData {
  country: string;
  office: string;
  street: string;
  city: string;
  phone: string;
  mail: string;
  bgm: string;
  bgl: string;
  circleBg: string;
  loc: LatLngTuple;
}

const data: IData[] = [
  {
    country: 'Canada',
    office: 'Designo Central Office',
    street: '3886 Wellington Street',
    city: 'Toronto, Ontario M9C 3J5',
    phone: '+12538638967',
    mail: 'contact@designo.co',
    bgm: locationCanadaM,
    bgl: locationCanadaL,
    circleBg: threeCircle,
    loc: [43.644249193715694, -79.39446430005256]
  },
  {
    country: 'Australia',
    office: 'Designo AU Office',
    street: '19 Balonne Street',
    city: 'New South Wales 2443',
    phone: '0267209092',
    mail: 'contact@designo.au',
    bgm: locationAustraliaM,
    bgl: locationAustraliaL,
    circleBg: threeCircle,
    loc: [-30.329139188818086, 149.7882828133819]
  },
  {
    country: 'United Kingdom',
    office: 'Designo UK Office',
    street: '13 Colorado Way',
    city: 'Rhyd-y-fro SA8 9GA',
    phone: '07831151400',
    mail: 'contact@designo.uk',
    bgm: locationUKM,
    bgl: locationUKL,
    circleBg: threeCircle,
    loc: [53.71044358144373, -1.3417922169753658]
  }
];

export default data;
