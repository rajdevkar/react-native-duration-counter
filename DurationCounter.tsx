import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";

interface DurationCounterProps {
  /** Starting time for countdown in seconds (for countdown mode) */
  initialTimeInSeconds?: number;
  /** Check-in timestamp in seconds (for count-up mode) */
  checkInTimestamp?: number;
  /** Determines if the counter counts up from check-in or down from initial time */
  countUp?: boolean;
  /** Custom styles */
  containerStyle?: ViewStyle;
  boxStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const DurationCounter: React.FC<DurationCounterProps> = ({
  initialTimeInSeconds = 0,
  checkInTimestamp,
  countUp = true,
  containerStyle,
  boxStyle,
  textStyle,
}) => {
  const [elapsedTime, setElapsedTime] = useState<number>(
    countUp && checkInTimestamp
      ? Math.floor(Date.now() / 1000) - checkInTimestamp
      : initialTimeInSeconds
  );

  useEffect(() => {
    const calculateElapsedTime = () => {
      const now = Math.floor(Date.now() / 1000);
      if (countUp && checkInTimestamp) {
        setElapsedTime(now - checkInTimestamp);
      } else {
        setElapsedTime((prev) => (prev > 0 ? prev - 1 : 0));
      }
    };

    calculateElapsedTime(); // initial calculation on load

    const intervalId = setInterval(() => {
      calculateElapsedTime();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [checkInTimestamp, countUp]);

  // Calculate hours, minutes, and seconds
  const hours = Math.floor(elapsedTime / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((elapsedTime % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (elapsedTime % 60).toString().padStart(2, "0");

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.box, boxStyle]}>
        <Text style={[styles.text, textStyle]}>{hours}</Text>
      </View>
      <Text style={[styles.separator, textStyle]}>:</Text>
      <View style={[styles.box, boxStyle]}>
        <Text style={[styles.text, textStyle]}>{minutes}</Text>
      </View>
      <Text style={[styles.separator, textStyle]}>:</Text>
      <View style={[styles.box, boxStyle]}>
        <Text style={[styles.text, textStyle]}>{seconds}</Text>
      </View>
    </View>
  );
};

export default DurationCounter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  box: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 69, 58, 0.7)",
    borderRadius: 8,
    width: 56,
    height: 56,
  },
  text: {
    fontSize: 24,
    color: "white",
  },
  separator: {
    fontSize: 24,
    color: "black",
    marginHorizontal: 8,
  },
});
