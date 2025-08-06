"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(_a) {
    var val1 = _a.val1, val2 = _a.val2;
    return val1 + val2;
}
console.log(createUser({ val1: 1, val2: 3 }));
function newUser(_a) {
    var user = _a.user;
    console.log(user);
    return user;
}
newUser({
    user: { name: "sathvik", email: "sathvik@gmail.com", isActive: true },
});
