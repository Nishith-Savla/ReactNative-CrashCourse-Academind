import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ id, text, onDeleteItem }) => {
	return (
		<View style={styles.goalItem}>
			<Pressable
				onPress={onDeleteItem.bind(this, id)}
				android_ripple={{ color: "#dddddd" }} // For android
				style={({ pressed }) => pressed && styles.pressedItem} // For ios but words for both
			>
				<Text style={styles.goalText}>{text}</Text>
			</Pressable>
		</View>
	);
};

export default GoalItem;

const styles = StyleSheet.create({
	goalItem: {
		margin: 8,
		borderRadius: 6,
		backgroundColor: "#5e0acc",
	},
	pressedItem: {
		opacity: 0.5,
	},
	goalText: {
		padding: 8,
		color: "#ffffff",
	},
});
