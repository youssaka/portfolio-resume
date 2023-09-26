import Assets from './data/assets';
import type { Skill } from './types';
import svelte from './md/svelte.md?raw';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const descriptions = {
	android: 'Android is an open-source mobile operating system developed by Google, primarily used for touchscreen devices. It\'s the world\'s most popular mobile OS, boasting a vast ecosystem of apps available via the Google Play Store.',
	kotlin: 'Kotlin is a modern, statically-typed programming language that runs on the Java Virtual Machine (JVM). It\'s officially supported by Google for Android development and is known for its concise syntax, interoperability with Java, and enhanced functional programming features.',
	javascript: 'JavaScript is a versatile, high-level, interpreted programming language primarily known for enabling interactive web pages. It\'s a core component of the web, alongside HTML and CSS, and allows for client-side script to interact with users, control the browser, and asynchronously fetch content. Over time, its capabilities have expanded with the rise of Node.js, making it a dominant choice for both front-end and back-end web development.',
	java: 'Java is a versatile, object-oriented programming language known for its platform independence. It\'s widely used in various applications, from enterprise software to Android app development, and is supported by a large standard library.',
	python: 'Python is an interpreted, high-level programming language celebrated for its clear syntax and versatility. It\'s widely used in web development, data analysis, artificial intelligence, scientific computing, and many other domains.',
	flask: 'Flask is a lightweight, micro web framework written in Python. It\'s designed to make getting started quick and easy, with the ability to scale up to complex applications. Flask offers suggestions but doesn\'t enforce any dependencies or project layout.',
	flutter: 'Flutter is an open-source UI toolkit developed by Google for creating natively compiled applications from a single codebase for mobile, web, and desktop. It uses the Dart language and is known for its fast performance and expressive UI components.',
	firebase: 'Firebase, by Google, is a comprehensive app development platform that provides a suite of cloud-based tools and services, including real-time databases, authentication, cloud functions, hosting, and more. It allows developers to build, improve, and grow their apps more efficiently.'
	};

const MY_SKILLS = [
	s({
		slug: 'android',
		color: 'green',
		description: descriptions.android,
		logo: Assets.Android,
		name: 'Android'
	}),
	s({
		slug: 'kotlin',
		color: 'purple',
		description: descriptions.kotlin,
		logo: Assets.Kotlin,
		name: 'Kotlin'
	}),
	s({
		slug: 'java',
		color: 'red',
		description: descriptions.java,
		logo: Assets.Java,
		name: 'Java'
	}),
	s({
		slug: 'python',
		color: 'blue',
		description: descriptions.python,
		logo: Assets.Python,
		name: 'Python'
	}),
	s({
		slug: 'flask',
		color: 'white',
		description: descriptions.flask,
		logo: Assets.Flask,
		name: 'Flask'
	}),
	s({
		slug: 'flutter',
		color: 'blue',
		description: descriptions.flutter,
		logo: Assets.Flutter,
		name: 'Flutter'
	}),
	s({
		slug: 'firebase',
		color: 'yellow',
		description: descriptions.firebase,
		logo: Assets.Firebase,
		name: 'Firebase'
	}),
	s({
		slug: 'javascript',
		color: 'yellow',
		description: descriptions.javascript,
		logo: Assets.JavaScript,
		name: 'Javascript'
	})
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
