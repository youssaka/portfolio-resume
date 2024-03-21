import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'snomekop',
		color: '#5e95e3',
		description:
			'Native Android Pokedex app using Jetpack compose, Hilt, Paging3, Retrofit and Room. MVVM Architecture',
		links: [{ to: 'https://github.com/youssaka/snomekop', label: 'GitHub' }],
		logo: Assets.Android,
		name: 'Snomekop (Pokedex)',
		period: {
			from: new Date(2022, 9, 25)
		},
		skills: getSkills('android', 'kotlin'),
		type: 'Native Android App'
	},
	{
		slug: 'deezalarm',
		color: '#ff3e00',
		description:
			'DeezAlarm is a native Android app that turns your favorite Deezer tracks into your morning alarm..',
		links: [{ to: 'https://play.google.com/store/apps/details?id=com.loyou.deezalarm', label: 'Playstore' }],
		logo: Assets.DeezAlarm,
		name: 'Deezalarm',
		period: {
			from: new Date(2018, 5, 15)
		},
		skills: getSkills('android', 'kotlin'),
		type: 'Native Android App'
	},
	{
		slug: 'fanunit',
		color: '#ff3e00',
		description:
			'Fanunit is a "Walk to Earn" type application that encourages you to walk daily to earn exclusive discounts on our marketplace. This application aims to motivate you to walk and adopt a regular walking routine.',
		links: [{ to: 'https://play.google.com/store/apps/details?id=com.fanunit.app&hl=ln', label: 'Playstore' }],
		logo: Assets.Fanunit,
		name: 'Fanunit',
		period: {
			from: new Date(2023, 5, 15)
		},
		skills: getSkills('android', 'kotlin'),
		type: 'Kotlin Multiplatform App'
	}
];

export default MY_PROJECTS;
