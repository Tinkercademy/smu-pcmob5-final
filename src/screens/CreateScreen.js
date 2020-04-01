import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { RouteProp } from "@react-navigation/native";
import RecipePostForm from "../components/RecipePostForm";
import { useRoute } from "@react-navigation/native";
import axios from "axios";

export default class CreateScreen extends React.Component {
  state = {
    food: "",
    recipe: ""
  };

  componentDidMount() {
    this.updateFood();
    this.getFood();
  }

  handleFoodUpdate = food => {
    this.setState({ food });
  };

  handleRecipeUpdate = recipe => {
    this.setState({ recipe });
  };

  updateFood = async post => {
    console.log("updateFood start");
    console.log(axios.defaults.headers.common["Authorization"]);
    try {
      const response = await axios.post(
        "https://pcmob4-food-api.herokuapp.com/create",
        post
      );
    } catch (err) {
      console.log(`Error on updateFood: ${JSON.stringify(err.response.data)}`);
    }
  };

  getFood = async (posts, setPosts) => {
    try {
      const response = await axios.get(
        "https://pcmob4-food-api.herokuapp.com/posts",
        posts,
        setPosts
      );
      setPosts(response.data);
      console.log("Posts:\n----");
      console.log(posts);
    } catch (err) {
      console.log(`Error: ${JSON.stringify(err)}`);
    }
  };

  render() {
    return (
      <View>
        <Text style={styles.label}>Enter Food:</Text>
        <TextInput
          style={styles.input}
          value={this.state.food}
          onChangeText={this.handleFoodUpdate}
        />
        <Text style={styles.label}>Enter Recipe:</Text>
        <TextInput
          style={styles.input}
          value={this.state.recipe}
          onChangeText={this.handleRecipeUpdate}
        />
        <Button
          title="Save Recipe"
          onPress={() => {
            this.updateFood;
            this.getFood;
            this.props.navigation.navigate("Index");
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 5
  }
});
