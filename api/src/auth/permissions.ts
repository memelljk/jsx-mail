type Permission = {
	title: string;
	value: string;
	description: string;
}

export const PERMISSIONS: {
	[key: string]: Permission;
} = {
	OTHER_ADMIN: {
		title: 'Other Admin',
		value: 'other:admin',
		description: 'Can perform any action on any user',
	},
	SELF_ADMIN: {
		title: 'Self Admin',
		value: 'self:admin',
		description: 'Can perform any action on itself',
	},
	SELF_EMAIL_VALIDATE: {
		title: 'Self Email Validate',
		value: 'self:email-validate',
		description: 'Can validate its own email',
	},
	SELF_RESET_PASSWORD: {
		title: 'Self Reset Password',
		value: 'self:reset-password',
		description: 'Can reset its own password',
	},
	SELF_GET: {
		title: 'Self Get',
		value: 'self:get',
		description: 'Can get its own data',
	},
	SELF_SESSION_DELETE: {
		title: 'Self Session Delete',
		value: 'self:session-delete',
		description: 'Can delete its own session',
	},
	SELF_DOMAIN_CREATE: {
		title: 'Self Domain Create',
		value: 'self:domain-create',
		description: 'Can create a domain for itself',
	},
	SELF_DOMAIN_DELETE: {
		title: 'Self Domain Delete',
		value: 'self:domain-delete',
		description: 'Can delete a domain for itself',
	},
	SELF_LIST_DOMAINS: {
		title: 'Self List Domains',
		value: 'self:list-domains',
		description: 'Can list domains for itself',
	},
	SELF_FILE_UPLOAD: {
		title: 'Self File Upload',
		value: 'self:file-upload',
		description: 'Can upload files for itself',
	},
	SELF_FILE_DELETE: {
		title: 'Self File Delete',
		value: 'self:file-delete',
		description: 'Can delete files for itself',
	},
	SELF_LIST_FILES: {
		title: 'Self List Files',
		value: 'self:list-files',
		description: 'Can list files for itself',
	},
	SELF_CREATE_SENDER: {
		title: 'Self Create Sender',
		value: 'self:create-sender',
		description: 'Can create senders for itself',
	},
	SELF_DELETE_SENDER: {
		title: 'Self Delete Sender',
		value: 'self:delete-sender',
		description: 'Can delete senders for itself',
	},
	SELF_LIST_SENDERS: {
		title: 'Self List Senders',
		value: 'self:list-senders',
		description: 'Can list senders for itself',
	}
}