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
	}
];

export default MY_PROJECTS;
