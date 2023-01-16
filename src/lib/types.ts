import type { Icons } from './components/Icon/Icons';

export interface Link {
	to: string;
	title: string;
}

export interface SocialLink extends Link {
	icon: Icons;
}

export interface NavMenuItem extends SocialLink {
	active?: boolean;
}
