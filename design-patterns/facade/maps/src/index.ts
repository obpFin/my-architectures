import { Map } from './Map';
import { User } from './User';
import { Company } from './Company';

const company = new Company();
const user = new User();
const map = new Map('map');

map.addMarker(user);
map.addMarker(company);
