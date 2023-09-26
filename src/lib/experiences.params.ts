import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'android-engineer',
		company: 'Bryj',
		description: 'Creating awesome apps for our customers.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Paris',
		period: { from: new Date(2020, 1, 12) },
		skills: getSkills('android', 'kotlin', 'javascript'),
		name: 'Android Engineer',
		color: '#ffffff',
		links: [],
		logo: Assets.Bryj
	},
	{
		slug: 'android-engineer',
		company: 'Idemia',
		description: 'Ensure the operational availability of biometric identification systems for the judicial police, civil systems, and border control systems.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Osny',
		period: { from: new Date(2016, 9, 1), to: new Date(2018, 9, 1) },
		skills: getSkills('python'),
		name: 'Support Engineer',
		color: '#ffffff',
		links: [],
		logo: Assets.Idemia
	}
];

export default MY_EXPERIENCES;
