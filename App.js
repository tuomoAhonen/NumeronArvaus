import {StatusBar} from 'expo-status-bar';
import {useState} from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';

export default function App() {
	const [correctNumber, setCorrectNumber] = useState(Math.floor(Math.random() * 100) + 1);
	console.log(correctNumber);
	const [prompt, setPrompt] = useState(`Guess the correct number between 1 and 100`);
	const [guess, setGuess] = useState();
	const [guessCounter, setGuessCounter] = useState(0);

	const handleGuess = () => {
		//if (!guess) return;
		if (prompt.includes('You guessed correct number')) return;
		setGuessCounter(guessCounter + 1);

		switch (true) {
			case guess > correctNumber:
				return setPrompt(`Your guess ${guess} is too high`);
			case guess < correctNumber:
				return setPrompt(`Your guess ${guess} is too low`);
			case guess == correctNumber:
				return setPrompt(`You guessed correct number! You used ${guessCounter} guesses`);
			default:
				return setPrompt(`Please, write your guess to input box`);
		}
	};

	const handleReset = () => {
		setGuess();
		setGuessCounter(0);
		setPrompt(`Guess the correct number between 1 and 100`);
		setCorrectNumber(Math.floor(Math.random() * 100) + 1);
	};

	return (
		<View style={styles.container}>
			<Text>{prompt}</Text>
			<TextInput
				keyboardType='numeric'
				value={guess}
				onChangeText={(e) => setGuess(parseInt(e))}
				style={styles.textInput}
			/>
			<View style={styles.buttonView}>
				<Button title='Make a guess' onPress={handleGuess} />
			</View>
			<View style={styles.buttonView}>
				<Button title='Reset the number' onPress={handleReset} />
			</View>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	textInput: {
		width: 100,
		margin: 5,
		paddingLeft: 5,
		paddingRight: 5,
		borderWidth: 1,
		borderColor: '#000000',
	},
	buttonView: {
		margin: 5,
	},
});

