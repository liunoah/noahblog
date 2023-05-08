import {  Text, StyleSheet } from 'react-native';


const TimeFormat = (initialDate) => {
  const date = new Date(initialDate);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDay()
  const formattedTime = `${year}年${month}月${day}日${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  return <Text style={styles.date}>{formattedTime}</Text>;
}
const styles = StyleSheet.create({
  date: {
    color: "rgb(133, 143, 165)",
    fontSize: 12,
  }
});
export default TimeFormat