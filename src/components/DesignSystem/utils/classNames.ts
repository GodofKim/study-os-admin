export const classNames = (...args: (string | boolean | null | undefined)[]) =>
  args.filter((arg) => typeof arg === "string").join(" ");
