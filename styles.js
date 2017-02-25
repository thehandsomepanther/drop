const React = require('react-native')
const { StyleSheet } = React
const colors = {
  blue: "#00C7FF",
  orange: "#F79868",
  green: "#23D6AE",
  lightBlue: "#9FC9EB",
  purple: "#9595D8",
  red: "#FF6363",
  backgroundColor: "#f2f2f2"
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    flex: 1
  }
})

module.exports = styles
module.exports.colors = colors
