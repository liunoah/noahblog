import React from "react";
import { StyleSheet, css } from "aphrodite";



const ButtonRow = (props) => {
  return (
    <div className={css(styles.container)}>
      <div >111111111111111</div>
      <button className={css(styles.button)}>修改</button>
      <button className={css(styles.button)}>删除</button>
      <button className={css(styles.button)}>Button 3</button>
    </div>
  );
};

const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
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
export default ButtonRow;
