"use strict";

import users from "../js/users.js";

const calculateTotalBalance = users =>
  users.map(user => user.balance).reduce((prev, curr) => prev + curr, 0);

console.log(calculateTotalBalance(users));
