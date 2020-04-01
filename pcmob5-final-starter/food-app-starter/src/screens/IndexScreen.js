import React, { useContext, useEffect, useState, useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { navigate } from "../navigationRef";
import axios from "axios";

const getFood = async (posts, setPosts) => {
  // code getFood here
};

const addFood = async post => {
  // code addFood here
};

const deleteFood = async (postID, posts, setPosts) => {
  // code deleteFood here
};

const editFood = async (posts, editPosts) => {
  // code editFood here
};

const IndexScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getFood(posts, setPosts);

    const listener = navigation.addListener("didFocus", () => {
      getFood(posts, setPosts);
    });

    return () => {
      listener.remove();
    };
  }, [navigation, setPosts, posts]);

  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={item => item.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              id={item.id}
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity
                  onPress={() => deleteFood(item.id, posts, setPosts)}
                >
                  <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "gray"
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
});

export default IndexScreen;
