import { Button, FlatList, StyleSheet, View } from "react-native";

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

export default function App() {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [courseGoals, setCourseGoals] = useState([]);

	function startAddGoalHandler() {
		setIsModalVisible(true);
	}

	function endAddGoalHandler() {
		setIsModalVisible(false);
	}

	function addGoalHandler(enteredGoalText) {
		setCourseGoals(currentCourseGoals => [
			...currentCourseGoals,
			{ text: enteredGoalText, id: Math.random().toString() },
		]);
		endAddGoalHandler();
	}

	function deleteGoalHandler(id) {
		setCourseGoals(currentCourseGoals => currentCourseGoals.filter(goal => goal.id !== id));
	}

	return (
		<>
			<StatusBar style="light" />
			<View style={styles.appContainer}>
				<Button title="Add New Goal" color="#5e0acc" onPress={startAddGoalHandler} />
				<GoalInput
					visible={isModalVisible}
					onAddGoal={addGoalHandler}
					onCancel={endAddGoalHandler}
				/>
				<View style={styles.goalsContainer}>
					<FlatList
						data={courseGoals}
						renderItem={itemData => (
							<GoalItem
								id={itemData.item.id}
								text={itemData.item.text}
								onDeleteItem={deleteGoalHandler}
							/>
						)}
						keyExtractor={item => item.id}
						alwaysBounceVertical={false}
					/>
				</View>
				{/* <View>
			<Text style={styles.dummyText}>Another piece of text</Text>
			</View>
				<Text style={styles.dummyText}>Hello World!</Text>
			<Button title="Tap me!" /> */}
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 60,
	},
	goalsContainer: {
		flex: 4,
	},
	/*
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	dummyText: {
		margin: 16,
		borderWidth: 1,
		borderColor: "red",
		padding: 16,
	},
  */
});
