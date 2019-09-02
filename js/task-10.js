"use strict";

import users from "../js/users.js";

const getSortedUniqueSkills = users =>
  users
    .map(user => user.skills)
    .reduce((a, b) => a.concat(b))
    .filter((item, pos, arr) => arr.indexOf(item) === pos)
    .sort();

console.log(getSortedUniqueSkills(users));
