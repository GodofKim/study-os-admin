const colors = [
  {
    key: "--BrandColor-QANDA-Orange",
    value: "#ff5500",
  },
  {
    key: "--Neutral-Colors-Neutral-0",
    value: "#121212",
  },
  {
    key: "--Neutral-Colors-Neutral-10",
    value: "#222222",
  },
  {
    key: "--Neutral-Colors-Neutral-20",
    value: "#3d3d3d",
  },
  {
    key: "--Neutral-Colors-Neutral-30",
    value: "#5d5d5d",
  },
  {
    key: "--Neutral-Colors-Neutral-40",
    value: "#7a7a7a",
  },
  {
    key: "--Neutral-Colors-Neutral-50",
    value: "#999999",
  },
  {
    key: "--Neutral-Colors-Neutral-60",
    value: "#b5b5b5",
  },
  {
    key: "--Neutral-Colors-Neutral-70",
    value: "#d0d0d0",
  },
  {
    key: "--Neutral-Colors-Neutral-80",
    value: "#f0f0f0",
  },
  {
    key: "--Neutral-Colors-Neutral-90",
    value: "#f9f9f9",
  },
  {
    key: "--Neutral-Colors-Neutral-100",
    value: "#ffffff",
  },
  {
    key: "--Interface-Colors-Orange-10",
    value: "#3a2c24",
  },
  {
    key: "--Interface-Colors-Orange-20",
    value: "#6e5344",
  },
  {
    key: "--Interface-Colors-Orange-50",
    value: "#ed5000",
  },
  {
    key: "--Interface-Colors-Orange-60",
    value: "#fa6616",
  },
  {
    key: "--Interface-Colors-Orange-90",
    value: "#fbdccc",
  },
  {
    key: "--Interface-Colors-Orange-100",
    value: "#fef1eb",
  },
  {
    key: "--Interface-Colors-Red-10",
    value: "#372324",
  },
  {
    key: "--Interface-Colors-Red-20",
    value: "#6b4446",
  },
  {
    key: "--Interface-Colors-Red-50",
    value: "#fb2d36",
  },
  {
    key: "--Interface-Colors-Red-60",
    value: "#fa4f57",
  },
  {
    key: "--Interface-Colors-Red-80",
    value: "#ffb6b1",
  },
  {
    key: "--Interface-Colors-Red-90",
    value: "#fed5d7",
  },
  {
    key: "--Interface-Colors-Red-100",
    value: "#ffeeef",
  },
  {
    key: "--Interface-Colors-Yellow-10",
    value: "#322f1b",
  },
  {
    key: "--Interface-Colors-Yellow-20",
    value: "#666037",
  },
  {
    key: "--Interface-Colors-Yellow-50",
    value: "#ffcc00",
  },
  {
    key: "--Interface-Colors-Yellow-60",
    value: "#f0cf29",
  },
  {
    key: "--Interface-Colors-Yellow-90",
    value: "#fff5cc",
  },
  {
    key: "--Interface-Colors-Yellow-100",
    value: "#fffbeb",
  },
  {
    key: "--Interface-Colors-Green-10",
    value: "#20312d",
  },
  {
    key: "--Interface-Colors-Green-20",
    value: "#41635b",
  },
  {
    key: "--Interface-Colors-Green-50",
    value: "#0d9974",
  },
  {
    key: "--Interface-Colors-Green-60",
    value: "#00a87c",
  },
  {
    key: "--Interface-Colors-Green-90",
    value: "#cfebe3",
  },
  {
    key: "--Interface-Colors-Green-100",
    value: "#ecf7f4",
  },
  {
    key: "--Interface-Colors-Blue-10",
    value: "#202c35",
  },
  {
    key: "--Interface-Colors-Blue-20",
    value: "#3f5769",
  },
  {
    key: "--Interface-Colors-Blue-50",
    value: "#0785f2",
  },
  {
    key: "--Interface-Colors-Blue-60",
    value: "#1198ff",
  },
  {
    key: "--Interface-Colors-Blue-90",
    value: "#cde7fc",
  },
  {
    key: "--Interface-Colors-Blue-100",
    value: "#ecf6ff",
  },
  {
    key: "--Interface-Colors-Purple-10",
    value: "#281f3f",
  },
  {
    key: "--Interface-Colors-Purple-20",
    value: "#493873",
  },
  {
    key: "--Interface-Colors-Purple-50",
    value: "#7e53e3",
  },
  {
    key: "--Interface-Colors-Purple-60",
    value: "#9b71ff",
  },
  {
    key: "--Interface-Colors-Purple-90",
    value: "#e5ddf9",
  },
  {
    key: "--Interface-Colors-Purple-100",
    value: "#f5f0fc",
  },
  {
    key: "--Neutral-Colors-Background-Canvas",
    value: "var(--Neutral-Colors-Neutral-90)",
  },
  {
    key: "--Neutral-Colors-Background-Card",
    value: "var(--Neutral-Colors-Neutral-100)",
  },
  {
    key: "--Neutral-Colors-Background-Selectable1",
    value: "var(--Neutral-Colors-Neutral-20)",
  },
  {
    key: "--Neutral-Colors-Background-Selectable2",
    value: "var(--Neutral-Colors-Neutral-80)",
  },
  {
    key: "--Neutral-Colors-Background-Selectable3",
    value: "var(--Neutral-Colors-Neutral-90)",
  },
  {
    key: "--Neutral-Colors-Background-Transparent",
    value: "rgba(31, 31, 31, 0.9)",
  },
  {
    key: "--Neutral-Colors-Foreground-Primary",
    value: "var(--Neutral-Colors-Neutral-10)",
  },
  {
    key: "--Neutral-Colors-Foreground-Secondary",
    value: "var(--Neutral-Colors-Neutral-30)",
  },
  {
    key: "--Neutral-Colors-Foreground-Tertiary",
    value: "var(--Neutral-Colors-Neutral-50)",
  },
  {
    key: "--Neutral-Colors-Foreground-on-Neutral-Color",
    value: "var(--Neutral-Colors-Neutral-90)",
  },
  {
    key: "--Neutral-Colors-Foreground-on-Accent-Color",
    value: "var(--Neutral-Colors-Neutral-90)",
  },
  {
    key: "--Neutral-Colors-Foreground-Disabled",
    value: "var(--Neutral-Colors-Neutral-60)",
  },
  {
    key: "--Neutral-Colors-Stroke-Selected",
    value: "var(--Neutral-Colors-Neutral-20)",
  },
  {
    key: "--Neutral-Colors-Stroke-Active",
    value: "var(--Neutral-Colors-Neutral-70)",
  },
  {
    key: "--Neutral-Colors-Stroke-Inactive",
    value: "var(--Neutral-Colors-Neutral-80)",
  },
  {
    key: "--Neutral-Colors-Overlay-Pressed",
    value: "rgba(0, 0, 0, 0.1)",
  },
  {
    key: "--Neutral-Colors-Overlay-Hover",
    value: "rgba(0, 0, 0, 0.03)",
  },
  {
    key: "--Neutral-Colors-Overlay-Disabled",
    value: "rgba(255, 255, 255, 0.5)",
  },
  {
    key: "--Neutral-Colors-Overlay-Dimmed",
    value: "rgba(0, 0, 0, 0.5)",
  },
  {
    key: "--Key-Colors-Background1",
    value: "var(--Interface-Colors-Orange-50)",
  },
  {
    key: "--Key-Colors-Foreground1",
    value: "var(--Interface-Colors-Orange-100)",
  },
  {
    key: "--Key-Colors-Stroke1",
    value: "var(--Interface-Colors-Orange-50)",
  },
  {
    key: "--Key-Colors-Background2",
    value: "var(--Interface-Colors-Orange-100)",
  },
  {
    key: "--Key-Colors-Foreground2",
    value: "var(--Interface-Colors-Orange-50)",
  },
  {
    key: "--Key-Colors-Stroke2",
    value: "var(--Interface-Colors-Orange-90)",
  },
  {
    key: "--Key-Colors-on-Neutral-Color",
    value: "var(--Interface-Colors-Orange-60)",
  },
  {
    key: "--Key-Colors-Overlay-Pressed",
    value: "rgba(237, 80, 0, 0.3)",
  },
  {
    key: "--Key-Colors-Overlay-Hover",
    value: "rgba(237, 80, 0, 0.1)",
  },
  {
    key: "--Accent-Colors-Informative-Background1",
    value: "var(--Interface-Colors-Purple-50)",
  },
  {
    key: "--Accent-Colors-Informative-Background2",
    value: "var(--Interface-Colors-Purple-100)",
  },
  {
    key: "--Accent-Colors-Informative-Foreground1",
    value: "var(--Interface-Colors-Purple-100)",
  },
  {
    key: "--Accent-Colors-Informative-Foreground2",
    value: "var(--Interface-Colors-Purple-50)",
  },
  {
    key: "--Accent-Colors-Informative-Stroke1",
    value: "var(--Interface-Colors-Purple-50)",
  },
  {
    key: "--Accent-Colors-Informative-Stroke2",
    value: "var(--Interface-Colors-Purple-90)",
  },
  {
    key: "--Accent-Colors-Interactive-Background1",
    value: "var(--Interface-Colors-Blue-50)",
  },
  {
    key: "--Accent-Colors-Interactive-Background2",
    value: "var(--Interface-Colors-Blue-100)",
  },
  {
    key: "--Accent-Colors-Interactive-Foreground1",
    value: "var(--Interface-Colors-Blue-100)",
  },
  {
    key: "--Accent-Colors-Interactive-Foreground2",
    value: "var(--Interface-Colors-Blue-50)",
  },
  {
    key: "--Accent-Colors-Interactive-Stroke1",
    value: "var(--Interface-Colors-Blue-50)",
  },
  {
    key: "--Accent-Colors-Interactive-Stroke2",
    value: "var(--Interface-Colors-Blue-90)",
  },
  {
    key: "--Accent-Colors-Negative-Background1",
    value: "var(--Interface-Colors-Red-50)",
  },
  {
    key: "--Accent-Colors-Negative-Background2",
    value: "var(--Interface-Colors-Red-100)",
  },
  {
    key: "--Accent-Colors-Negative-Foreground1",
    value: "var(--Interface-Colors-Red-100)",
  },
  {
    key: "--Accent-Colors-Negative-Foreground2",
    value: "var(--Interface-Colors-Red-50)",
  },
  {
    key: "--Accent-Colors-Negative-Stroke1",
    value: "var(--Interface-Colors-Red-50)",
  },
  {
    key: "--Accent-Colors-Negative-Stroke2",
    value: "var(--Interface-Colors-Red-90)",
  },
  {
    key: "--Accent-Colors-Notice-Background1",
    value: "var(--Interface-Colors-Yellow-50)",
  },
  {
    key: "--Accent-Colors-Notice-Background2",
    value: "var(--Interface-Colors-Yellow-100)",
  },
  {
    key: "--Accent-Colors-Notice-Foreground1",
    value: "var(--Interface-Colors-Yellow-10)",
  },
  {
    key: "--Accent-Colors-Notice-Foreground2",
    value: "var(--Interface-Colors-Yellow-20)",
  },
  {
    key: "--Accent-Colors-Notice-Stroke1",
    value: "var(--Interface-Colors-Yellow-50)",
  },
  {
    key: "--Accent-Colors-Notice-Stroke2",
    value: "var(--Interface-Colors-Yellow-90)",
  },
  {
    key: "--Accent-Colors-Success-Background1",
    value: "var(--Interface-Colors-Green-50)",
  },
  {
    key: "--Accent-Colors-Success-Background2",
    value: "var(--Interface-Colors-Green-100)",
  },
  {
    key: "--Accent-Colors-Success-Foreground1",
    value: "var(--Interface-Colors-Green-100)",
  },
  {
    key: "--Accent-Colors-Success-Foreground2",
    value: "var(--Interface-Colors-Green-50)",
  },
  {
    key: "--Accent-Colors-Success-Stroke1",
    value: "var(--Interface-Colors-Green-50)",
  },
  {
    key: "--Accent-Colors-Success-Stroke2",
    value: "var(--Interface-Colors-Green-90)",
  },
] as const;

export type Color = (typeof colors)[number]["key"];

export const getColor = (color: Color): string => {
  const found = colors.find((item) => item.key === color);

  if (!found) {
    throw new Error(`Color not found: ${color}`);
  }

  if (found.value.startsWith("var(")) {
    const [key] = found.value.split("(")[1].split(")");

    return getColor(key as Color);
  }

  return found.value;
};
