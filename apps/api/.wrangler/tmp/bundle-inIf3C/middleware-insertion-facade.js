				import worker, * as OTHER_EXPORTS from "/home/theryston/Projects/jsx-mail/apps/api/src/index.ts";
				import * as __MIDDLEWARE_0__ from "/home/theryston/Projects/jsx-mail/node_modules/.pnpm/wrangler@3.28.3_@cloudflare+workers-types@4.20240208.0/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts";
				const envWrappers = [__MIDDLEWARE_0__.wrap].filter(Boolean);
				const facade = {
					...worker,
					envWrappers,
					middleware: [
						__MIDDLEWARE_0__.default,
            ...(worker.middleware ? worker.middleware : []),
					].filter(Boolean)
				}
				export * from "/home/theryston/Projects/jsx-mail/apps/api/src/index.ts";

				const maskDurableObjectDefinition = (cls) =>
					class extends cls {
						constructor(state, env) {
							let wrappedEnv = env
							for (const wrapFn of envWrappers) {
								wrappedEnv = wrapFn(wrappedEnv)
							}
							super(state, wrappedEnv);
						}
					};
				

				export default facade;