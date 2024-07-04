// className 관련 유틸들이 들어있는 파일

export const clsx = (...args: (string | undefined | false)[]) =>
  args.filter((arg) => typeof arg === "string").join(" ");
