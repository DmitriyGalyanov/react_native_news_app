import { Animated } from 'react-native';

export default {
	defaultAnimTime: 2000
}

export function changeWidthAnim(target, toValue, duration) {
	Animated.timing(target, {
		toValue: toValue,
		duration: duration,
		useNativeDriver: false
	}).start();
};

export function fadeInAnim(target, duration) {
	Animated.timing(target, {
		toValue: 1,
		duration: duration,
		useNativeDriver: false
	}).start();
};

export function fadeOutAnim(target, duration) {
	Animated.timing(target, {
		toValue: 0,
		duration: duration,
		useNativeDriver: false
	}).start();
};