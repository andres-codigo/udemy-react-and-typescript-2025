var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//
//// Primitive Types
//
var userName;
userName = 'Dre';
var userAge;
userAge = 35;
var isValid = true;
isValid = false;
var userID = 'abc123';
userID = 123;
var user;
user = {
    name: 'Dre',
    age: 34,
    isAdmin: true,
    id: 'abc123',
};
//
//// Array Types
//
var hobbies;
hobbies = ['Sports', 'Music', 'Cooking'];
//
//// Function Types
//
// ...with return value type
function add(a, b) {
    var result = a + b;
    console.log(result);
    return result;
}
function calculate(a, b, calcFn) {
    calcFn(a, b);
}
calculate(10, 20, add);
// interfaces are easily extendable
// interface Credentials {
// 	mode: string
// }
var creds;
creds = {
    username: 'dre',
    password: '1234',
};
// For example, if you're defining a class of credentials, for example, you can use the implements keyword
// to implement an interface.  And this then forces you to add the properties and methods that are defined
// in the object of that interface in your class as well.
var AuthCredentials = /** @class */ (function () {
    function AuthCredentials() {
    }
    return AuthCredentials;
}());
function login(credentials) {
    console.log(credentials.username);
}
login(new AuthCredentials());
var admin;
admin = {
    permissions: ['login'],
    userName: 'Max',
};
var role;
role = 'admin';
role = 'user';
role = 'editor';
function performAction(action, role) {
    if (role === 'admin' && typeof action === 'string') {
        // ...
    }
}
//
//// CUSTOM GENERIC TYPES
//
var roles; // or Role[]
roles = ['admin', 'editor'];
var textStorage = {
    storage: [],
    add: function (data) {
        this.storage.push(data);
    },
};
var userStorage = {
    storage: [],
    add: function (user) { },
};
//
// JAVASCRIPT VERSION
//
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
var newUser = merge({ name: 'Dre' }, { age: 34 });
