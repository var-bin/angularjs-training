module.exports = {
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "ecmaVersion": 6,
    "sourceType": "module",
    "plugins": [
        "standard",
        "promise"
    ],
    "env": {
        "browser": true,
        "node": false,
        "amd": true
    },
    "globals": {
        "angular": true
    }
};
