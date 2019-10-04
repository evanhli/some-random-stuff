module.exports = {
    "extends": "airbnb",
    "env": {
        "jest": true,
        "browser": true,
    },
    "rules": {
        "arrow-body-style": 0,
        "jsx-quotes": 0,
        "react/prop-types": 0,
        "no-plusplus": 0,
        "comma-dangle": ["error", {
            "arrays": "never",
            "objects": "always-multiline",
        }]
    }
};