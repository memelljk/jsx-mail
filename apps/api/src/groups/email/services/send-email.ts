import { SendEmailSchema } from "../schemas";
import { AwsClient } from "aws4fetch";

export default async function sendEmail({ body, env }: { body: SendEmailSchema, env: Env }) {
	const awsClient = new AwsClient({
		accessKeyId: env.AWS_ACCESS_KEY_ID,
		secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
		region: env.AWS_REGION
	})

	const sesUrl = `https://email.${env.AWS_REGION}.amazonaws.com`;

	const response = await awsClient.fetch(`${sesUrl}/v2/email/outbound-emails`, {
		headers: {
			"Content-Type": "application/json",
		},
		method: "POST",
		body: JSON.stringify({
			FromEmailAddress: `${body.from.name} <${body.from.email}>`,
			Destination: {
				ToAddresses: body.to
			},
			Content: {
				Simple: {
					Body: {
						Html: {
							Charset: "UTF-8",
							Data: body.html
						}
					},
					Subject: {
						Charset: "UTF-8",
						Data: body.subject
					}
				}
			},
		})
	})

	if (response.status >= 400) {
		throw new Error(await response.text())
	} else {
		console.log(`Sent email to ${body.to.join(", ")}`)
	}

	const data = await response.json();

	return data
}