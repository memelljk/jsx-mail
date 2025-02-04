export type Balance = {
	amount: number;
	friendlyFullAmount: string;
	friendlyAmount: string;
};

export type User = {
	id: string;
	name: string;
	email: string;
	isEmailVerified: boolean;
	accessLevel: string;
	phone: string | null;
	isPhoneVerified: boolean;
	balance: Balance;
	createdAt: Date;
	updatedAt: Date;
};
