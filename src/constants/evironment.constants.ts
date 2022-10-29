const currentEnvironment = (() => process.env.NODE_ENV)();
export const IS_DEVELOPMENT = currentEnvironment !== "production";
