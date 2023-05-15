import React, { useEffect, useState, useRef } from "react";
import MD from '../tools/markdown/Markdown'
import { FlatList, Text, View, StyleSheet } from 'react-native';




function Article({ text }) {
    const [isText, setIsText] = useState(true)

    const handleText = () => {
        // console.log(111111);
        setIsText(isText  ? false : true)
    }
    return (
        <Text style={styles.item}>
            <Text onPress={handleText} style={styles.isText} className="comment_list_date"> {isText ? "关闭文章" : "展开文章"}

            </Text>
            {

                isText?
                <Text style={styles.text}>
                    <MD markdown={text} />
                </Text> :
                    <div></div>
            }

        </Text>
    )
}


const styles = StyleSheet.create({
    item: {
        // marginBottom : "10px"
    },

    isText: {
        color: "rgb(22, 78, 150)",
        fontSize: 12,
        display: 'inline-block',
        whiteSpace: 'nowrap',
        textAlign: "right",
        width: "100%"
    },
    text: {
        overflow: 'scroll'

    }
});

export default Article