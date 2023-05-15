import React from "react";
import { StyleSheet, css } from "aphrodite";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "#f9c2ff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 32,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#ccc",
    color: "#fff",
    padding: "10px 20px",
    margin: "0 5px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    ":hover": {
      backgroundColor: "#555",
    },
  },
});



const Content = ({ title, onSelect }) => {
    return (
      <div className={css(styles.item)} onClick={onSelect}>
        <div className={css(styles.title)}>{title}</div>
        <div className={css(styles.buttonContainer)}>
          <button className={css(styles.button)}>Button 1</button>
          <button className={css(styles.button)}>Button 2</button>
          <button className={css(styles.button)}>Button 3</button>
        </div>
      </div>
    );
  };
export default Content