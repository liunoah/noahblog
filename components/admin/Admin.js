import React, { useState } from "react";
import { FlatList, Text, View, StyleSheet, Image } from 'react-native';
function SearchBox() {
    const [value, setValue] = useState("");

    const handleKeyDown = (event) => {
        if (event.ctrlKey && event.key === "k") {
            // 按下 Ctrl+K 后跳转到主页
            window.location.href = "/";
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // 在这里进行搜索操作
        console.log(`搜索：${value}`);
    };

    return (
        <div style={styles.container}>
            <div style={styles.left}>
                <div style={styles.logo}>
                    <Image style={styles.img}
                        source={require('../../assets/favicon.png')}
                    />
                </div>
                <div style={styles.table}>
                    <div>
                        12341
                        1243
                        1
                        234
                        1
                        4
                        234
                        124
                        1
                        241
                        1
                    </div>
                </div>
            </div>
            <div style={styles.right}>222</div>

        </div>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgb(200,200,200)"
    },
    img:{
        position:"fixed",
        top: 0,
        height : "100px",
        width : "100px"
    },
    left: {
        height: "100%",
        width: "200px",
        backgroundColor: "rgb(255,255,255)",
        padding: "0.75rem"

    },
    right: {

    },
    table:{
        overflow: 'scroll',
        marginTop: '120px',
        backgroundColor:'rgb(10,10,10)'
    }
})
export default SearchBox;