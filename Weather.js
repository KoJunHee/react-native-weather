import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
  Rain: {
    colors: ["#00C6FB", "#005BEA"],
    title: "Raining like a MF",
    subtitle: "For more info look outside",
    icon: "weather-rainy"
  },
  Clear: {
    colors: ["#FEF253", "#FF7300"],
    title: "Sunny as FUCK",
    subtitle: "Go get your ass bunt",
    icon: "weather-sunny"
  },
  ThunderStrom: {
    colors: ["#00ECBC", "#007ADF"],
    title: "ThunderStorm in the house",
    subtitle: "Actually, outside of the house",
    icon: "weather-lightning"
  },
  Clouds: {
    colors: ["#D7D2CC", "#304352"],
    title: "Clouds",
    subtitle: "clouds days",
    icon: "weather-cloudy"
  },
  Snow: {
    colors: ["#7DE2FC", "#B9B6E5"],
    title: "Cold as balls",
    subtitle: "Do you want to build a snow man?",
    icon: "weather-snowy"
  },
  Drizzle: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "What is the drizzle",
    subtitle: "Is like rainy",
    icon: "weather-hail"
  },
  Haze: {
    colors: ["#89F78E", "#66A61F"],
    title: "Haze like London",
    subtitle: "wow",
    icon: "weather-hail"
  },
  Mist: {
    colors: ["#89F33E", "#66A61F"],
    title: "Mist!!",
    subtitle: "opps",
    icon: "weather-fog"
  }
};

function Weather({ weatherName, temp, location }) {
  return (
    <LinearGradient
      colors={weatherCases[weatherName].colors}
      style={style.container}
    >
      <View style={style.upper}>
        <MaterialCommunityIcons
          color="white"
          size={144}
          name={weatherCases[weatherName].icon}
        />
        <Text style={style.temp}>{temp}</Text>
      </View>
      <View style={style.lower}>
        <Text style={style.location}>Your location : {location}</Text>
        <Text style={style.title}>{weatherCases["ThunderStrom"].title}</Text>
        <Text style={style.subtitle}>
          {weatherCases["ThunderStrom"].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

export default Weather;

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
};

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  temp: {
    fontSize: 48,
    backgroundColor: "transparent",
    color: "white",
    marginTop: 10
  },
  lower: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  location: {
    fontSize: 40,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 10,
    fontWeight: "400"
  },
  title: {
    fontSize: 38,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 10,
    fontWeight: "300"
  },
  subtitle: {
    fontSize: 24,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 24
  }
});
