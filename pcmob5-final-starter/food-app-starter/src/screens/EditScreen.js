import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import RecipePostForm from "../components/RecipePostForm";

const EditScreen = ({ navigation }) => {
  console.log(navigation);
  const id = navigation.getParam("id");
  const { state, editFood } = useContext(Context);

  const recipePost = state.find(recipePost => recipePost.id === id);

  return (
    <RecipePostForm
      initialValues={{ food: recipePost.food, recipe: recipePost.recipe }}
      onSubmit={(food, recipe) => {
        editFood(id, food, recipe, () => navigation.pop());
        console.log(food, recipe);
      }}
    />
  );
};

const styles = StyleSheet.create({});
export default EditScreen;
