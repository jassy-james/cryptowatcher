export const getEnvironmentVariable = (name: string) => {
  if (import.meta.env[name] === undefined) {
    throw new Error(`Env variable ${name} is required`);
  }
  return import.meta.env[name] || "";
};
