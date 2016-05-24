// resources\assets\js\users\index.js

import {UserComponent} from './UserComponent';

const User = new UserComponent();

var login = User.login('Yitan', 111);


console.log(login);
