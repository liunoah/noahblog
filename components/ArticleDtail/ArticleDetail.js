import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../tools/Api';
import { Text, View, StyleSheet } from 'react-native';
import MD from '../tools/markdown/Markdown'
import Comment from '../body/Comment'
import TimeFormat from '../tools/TimeFormat';
import Head from '../head/head'

import Loading from '../tools/loading';
const ArticleDetail = (props) => {
  const { articleId } = useParams();
  // const articleId  = props.articleId;

  const [isLoading, setIsLoading] = useState(false);

  const [item, setItem] = useState({})
  const [data, setData] = useState([])


  useEffect(() => {
    async function fetchData() {
      const response = await Api.get(articleId)
      console.log(response);
      setItem(response)
      setIsLoading(true)


    }
    fetchData()
  }, []);
  useEffect(() => {
    console.log(item);
    console.log(item.title);
    console.log(item.text);
  }, [item]);
  return (

    <View style={styles.body}>
      <Head />
      {isLoading ?
        <View style={styles.item}>

          <Text style={styles.title}>{"loading" && item.title}  </Text>
          <Text style={styles.date} className="comment_list_date">{TimeFormat(item.updated_at)}</Text>

          <Text>
            <MD markdown={item.text} />
          </Text>
          {articleId && <Comment articleId={articleId} isVisible={false} />}
        </View> :
        <Loading />
      }

    </View>
  )
}
const styles = StyleSheet.create({
  body: {
    width: '900px',
    margin: 'auto',
    marginTop: "20px", /* 添加上方 margin */
    marginBottom: "20px", /* 添加下方 margin */
  },
  item: {
    backgroundColor: "rgb(255, 255, 255)",
    padding: 20,
    marginVertical: 8,
    width: '900px',
    margin: 'auto',
    border: '1px solid rgb(240, 242, 247)',
    borderRadius: '5px',
    marginTop: "80px"
  },
  title: {
    fontSize: 20,
    color: "rgb(131, 80, 188)",
    fontWeight: 'bolder',
    width: "400px"


  },
  date: {
    color: "rgb(133, 143, 165)",
    fontSize: 12,
    textAlign: "right"
  },
  link: {
    textDecorationLine: 'none'
  }
});
export default ArticleDetail