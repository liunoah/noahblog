import React, { useState } from "react";
import { StyleSheet, css } from "aphrodite";
import { FlatList } from "react-native";

const ContentList = ({ onSelect }) => {
    const data = [
        {
          id: "1",
          title: "Item 1",
        },
        {
          id: "2",
          title: "Item 2",
        },
        {
          id: "3",
          title: "Item 3",
        },
      ];
    const renderItem = ({ item }) => (
      <Item title={item.title} onSelect={() => onSelect(item)} />
    );
    return (
      <div className={css(styles.container)}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </div>
    );
  };
export default ContentList