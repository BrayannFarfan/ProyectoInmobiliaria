import { Contact } from './Contact.js';
import { Property } from './Property.js';
import { User } from './User.js';


await Contact.sync();
await Property.sync();
await User.sync();