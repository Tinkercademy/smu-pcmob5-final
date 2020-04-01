import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const RecipePostForm = ({ onSubmit, initialValues }) => {
  const [food, setFood] = useState(initialValues.food);
  const [recipe, setRecipe] = useState(initialValues.recipe);

  return (
    <View>
      <Text style={styles.label}>Enter Food:</Text>
      <TextInput
        style={styles.input}
        value={food}
        onChangeText={text => setFood(text)}
      />
      <Text style={styles.label}>Enter Recipe:</Text>
      <TextInput
        style={styles.input}
        value={recipe}
        onChangeText={text => setRecipe(text)}
      />
      <Button
        title="Save Recipe"
        onPress={(() => this.state.food, this.state.recipe)}
      />
    </View>
  );
  ß;
};

RecipePostForm.defaultProps = {
  initialValues: {
    food: "",
    recipe: ""
  }
};

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
export default RecipePostForm;
