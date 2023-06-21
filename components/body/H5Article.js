import React, { useEffect, useState, useRef } from "react";
import MD from '../tools/markdown/Markdown'
import { FlatList, Text, View, StyleSheet } from 'react-native';
import TimeFormat from '../tools/TimeFormat';
// 眼睛图标
import { Ionicons } from '@expo/vector-icons';
import style from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";

import Api from '../tools/Api';
function H5Article({ item }) {
    const [isText, setIsText] = useState(true)

    const handleText = () => {
        // console.log(111111);
        setIsText(isText ? false : true)
    }
    Api.addBlogFrequency(item.id)
    return (
        <Text style={styles.item}>
            <div style={styles.information}>

            <Text  style={styles.time}>发表于: {TimeFormat(item.created_at)}</Text>
            <Text style={styles.icon} >发表人: </Text>
            <Text style={[styles.color,styles.nickname]} className="comment_list_date">{item.name}</Text>
            <Ionicons style={styles.icon} name="eye-outline" color="black" />
            <Text>阅读次数: </Text>
            <Text style={styles.color}>{item.frequency}</Text>
            <Text onPress={handleText} style={[styles.isText,styles.text]} className="comment_list_date"> {isText ? "关闭文章" : "展开文章"}</Text>
            </div>
            {

                isText ?
                    <Text >
                        <MD markdown={item.text} />
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
    time: {
        width: "180px",
        display: 'inline-block',
    },
    icon:{
        marginLeft: 10,
        color: "rgb(22, 78, 150)",
    },

    isText: {
        fontSize: 12,
        display: 'inline-block',
        whiteSpace: 'nowrap',
        textAlign: "right",
    },

    text: {
        float:"right",
    },

    information:{
        paddingTop: 10,
        fontSize: 12,
        color: "rgb(22, 78, 150)",
    },
    color:{
        color: "rgb(133, 143, 165)",
    },
    nickname:{
        width: "100px",
        display: 'inline-block',
    }
});

export default H5Article