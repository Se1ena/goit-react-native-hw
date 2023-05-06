import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const CommentsScreen = () => {
	return (
		<View style={styles.container}>
			<Text>CreateCommentsScreen</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});