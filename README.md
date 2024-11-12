# React Native Duration Counter

`react-native-duration-counter` is a customizable React Native component for tracking time duration, ideal for check-in timers, attendance counters, or any application where tracking elapsed or countdown time is needed.

## Features
- **Flexible Mode**: Track elapsed time from a check-in timestamp or countdown from a specified duration.
- **Customizable Styling**: Easily adjust colors, fonts, and layout to match your design.
- **Battery Efficient**: Updates only while active, reducing background resource usage.

## Installation

To install the package, run:

```bash
npm install react-native-duration-counter
```

or with Yarn:

```bash
yarn add react-native-duration-counter
```

## Usage

### Basic Usage

Import DurationCounter and pass in the desired props:

```typescript
import DurationCounter from 'react-native-duration-counter';

export default function App() {
  return (
    <DurationCounter
      checkInTimestamp={1730785509} // Replace with your check-in timestamp
      countUp={true} // Set to true to count up from check-in time
    />
  );
}
```

### Countdown Timer

To use DurationCounter as a countdown timer, set countUp to false and provide an initialTimeInSeconds.

```typescript
import DurationCounter from 'react-native-duration-counter';

export default function App() {
  return (
    <DurationCounter
      initialTimeInSeconds={3600} // Countdown from 1 hour
      countUp={false}
    />
  );
}
```

### Custom Styling

You can customize the look and feel by passing in style props for the container, timer boxes, and text.

```typescript
import DurationCounter from 'react-native-duration-counter';

export default function App() {
  return (
    <DurationCounter
      checkInTimestamp={1730785509}
      countUp={true}
      containerStyle={{ marginTop: 20 }}
      boxStyle={{ backgroundColor: 'blue', width: 60, height: 60 }}
      textStyle={{ fontSize: 20, color: 'white' }}
    />
  );
}
```

## Utility Functions

The package includes utility functions for retrieving elapsed time and countdown time without rendering the component.

### getElapsedTime

Retrieve elapsed time based on a given check-in timestamp.

```typescript
import { getElapsedTime } from 'react-native-duration-counter';

const checkInTimestamp = 1730785509;
const elapsedTime = getElapsedTime(checkInTimestamp);
console.log(`Elapsed Time: ${elapsedTime.hours}:${elapsedTime.minutes}:${elapsedTime.seconds}`);
```

### getCountdownTime

Retrieve countdown time from an initial duration in seconds.

```typescript
import { getCountdownTime } from 'react-native-duration-counter';

const initialTimeInSeconds = 3600;
const countdownTime = getCountdownTime(initialTimeInSeconds);
console.log(`Countdown Time: ${countdownTime.hours}:${countdownTime.minutes}:${countdownTime.seconds}`);
```

## Custom Hooks

The package also includes custom hooks for real-time updates to elapsed or countdown time.

### useElapsedTime

Continuously updates the elapsed time from a check-in timestamp.

```typescript
import { useElapsedTime } from 'react-native-duration-counter';

const checkInTimestamp = 1730785509;
const elapsedTime = useElapsedTime(checkInTimestamp);
console.log(`Elapsed Time: ${elapsedTime.hours}:${elapsedTime.minutes}:${elapsedTime.seconds}`);
```

### useCountdownTime

Continuously updates the countdown time from an initial duration.

```typescript
import { useCountdownTime } from 'react-native-duration-counter';

const initialTimeInSeconds = 3600;
const countdownTime = useCountdownTime(initialTimeInSeconds);
console.log(`Countdown Time: ${countdownTime.hours}:${countdownTime.minutes}:${countdownTime.seconds}`);
```

## Props
| Prop | Type | Required | Description |
| :--- | :----- | :--- | :--- |
| initialTimeInSeconds | number | No | Initial time in seconds for countdown mode. Only used if countUp is set to false. |
| checkInTimestamp | number | No | The check-in timestamp (in seconds) for counting up mode. Only used if countUp is set to true. |
| countUp | boolean | No | Determines if the counter should count up (true) or down (false). Defaults to true. |
| disableCounter | boolean | No | Disables countdown |
| containerStyle | ViewStyle | No | Custom style for the container view. |
| boxStyle | ViewStyle | No | Custom style for each time unit box (hours, minutes, seconds). |
| textStyle | TextStyle | No | Custom style for the text inside each time unit box. |

### Example

You can customize the look and feel by passing in style props for the container, timer boxes, and text.

```typescript
import React from 'react';
import { StyleSheet, View } from 'react-native';
import DurationCounter from 'react-native-duration-counter';

export default function App() {
  return (
    <View style={styles.container}>
      <DurationCounter
        initialTimeInSeconds={1800} // 30 minutes countdown
        countUp={false}
        containerStyle={styles.counterContainer}
        boxStyle={styles.counterBox}
        textStyle={styles.counterText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterContainer: {
    marginTop: 20,
  },
  counterBox: {
    backgroundColor: 'purple',
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  counterText: {
    fontSize: 22,
    color: 'white',
  },
});
```

### License

MIT License

### Contributing

If you’d like to contribute, please fork the repository and make changes as you’d like. Pull requests are warmly welcome.
