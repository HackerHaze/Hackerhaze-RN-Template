<div className="flex mt-10 mb-10 justify-center">
  <img
    src="https://www.hackerhaze.com/images/hh-owl.png"
    alt="HackerHaze Owl"
    width="80%"
  />
</div>

# Introduction & Quick Start

Welcome to HackerHaze's React Native Template! This is a minimal, yet highly functional
template that leverages some of the best libraries in the React Native ecosystem.

For the full documentation head out to [Docs](https://www.hackerhaze.com/docs/templates/rntemplate/intro)

It's designed to get you up in speed with a solid foundation for your mobile app development.

```bash
npx react-native init YourProjectName --template hackerhaze-react-native-template
```

## Libraries Used

We've included a number of libraries in this template to help you get started. Here's a breakdown of what's included:

### Core Libraries

- `react@18.2.0`: The core library for building user interfaces.
- `react-native@0.72.6`: The framework for building native apps using React.

### State Management

- `@rematch/core@2.2.0`: A Redux-based state management library that provides a lightweight and flexible way to write Redux code.
- `@rematch/immer@2.1.3`: Plugin for using Immer to write reducers that manipulate state in an immutable way.
- `@rematch/loading@2.1.2`: Plugin for automatically managing loading states for effects.
- `@rematch/persist@2.1.2`: Plugin for saving and rehydrating rematch models using localStorage.
- `@rematch/select@3.1.2`: Plugin for creating optimized selectors.
- `@rematch/updated@2.1.2`: Plugin for tracking when state is updated.
- `redux@4.2.1`: A predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.
- `react-redux@8.1.3`: Official React bindings for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data.

### Navigation

- `react-native-navigation@7.37.1`: A complete native navigation solution for React Native, with optional Redux support, Jest tests, and more.

### UI and Styling

- `nativewind@2.0.11`: A utility-first CSS framework for rapid UI development.
- `react-native-vector-icons@10.0.1`: Customizable Icons for React Native.

### Form Management

- `react-hook-form@7.47.0`: Performant, flexible and extensible forms with easy-to-use validation.

### Cloud Services and Notifications

- `appcenter@5.0.0`, `appcenter-analytics@5.0.0`, `appcenter-crashes@5.0.0`: Microsoft's App Center SDK, which provides a variety of cloud services for app development, including analytics, diagnostics, distribution, and push notifications.
- `react-native-code-push@8.1.0`: A cloud service that enables React Native developers to deploy mobile app updates directly to their users' devices.
- `@react-native-firebase/app@18.6.0`: The core module for React Native Firebase, it provides the base Firebase app instance and all core Firebase services.
- `@react-native-firebase/messaging@18.6.1`: A module that provides cloud messaging services, including the handling of push notifications for your React Native applications.

### Testing and Linting

- `jest`: A delightful JavaScript Testing Framework.
- `eslint`: A tool for identifying and reporting on patterns in JavaScript.

### Storage and Device Information

- `@react-native-async-storage/async-storage`: An asynchronous, unencrypted, persistent, key-value storage system for React Native.
- `react-native-device-info@10.11.0`: A library to get device information from within React Native.

### User Interaction and Localization

- `react-native-gesture-handler@2.13.4`: Provides native-driven gesture management APIs for building best possible touch-based experiences in React Native.
- `react-native-localization@2.3.2`: Simple to use library to handle localization in your React Native applications.

### Animation and SVG

- `react-native-reanimated@3.5.4`: A more powerful alternative to the Animated library, designed to be declarative and more flexible.
- `react-native-svg@13.14.0`: SVG library for React Native.
- `react-native-svg-transformer@1.1.0`: A transformer that allows you to import SVGs in your React Native project the same way that you would in a Web application.

### Debugging and Validation

- `redux-logger@3.0.6`: Logger middleware for Redux.
- `yup@1.3.2`: A JavaScript schema builder for value parsing and validation.

### Testing, Linting, Transpiling and Tooling

- `babel-plugin-module-resolver@5.0.0`: A Babel plugin to add a new resolver for your modules when compiling your code using Babel. This plugin allows you to add new "root" directories that contain your modules.
- `eslint@8.19.0`: A tool for identifying and reporting on patterns in JavaScript.
- `jest@29.2.1`: A delightful JavaScript Testing Framework.
- `prettier@2.4.1`: An opinionated code formatter.
- `react-test-renderer@18.2.0`: This package provides a React renderer that can be used to render React components to pure JavaScript objects, without depending on the DOM or a native mobile environment.

We hope this template serves as a useful starting point for your React Native projects. Happy coding!
