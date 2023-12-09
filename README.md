# REACT APP

- After create the project en expo.dev, follow the recomended steps to create locally and connect the app with expo:
- install --global eas-cli 
- npx create-expo-app rate-app
- cd rate-app 
- eas init --id f194a9b9-ebe2-490d-aa63-0159aab4d2c7 
    - npm run web
    - npm run android
    - npm run ios

- eslint For development environment:
    npm install --save-dev babel-eslint eslint-config-standard eslint-config-standard-jsx eslint-config-standard-react eslint-plugin-promise eslint-plugin-import eslint-plugin-node eslint-plugin-react

- For routing install:
    npm install react-router-native

- If you are using or validating the app in the browser, with NativeRoute errors comes in the browser
    here you are the way to solve this problem

    npm install @expo/webpack-config -D
    
    create a webpack.config.js file adding a new rule to the webpack configuration 
    to allow understand jsx files on the web from expo package



