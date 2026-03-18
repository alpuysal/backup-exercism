const COLOR_VALUES = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
} as const;

type Color = keyof typeof COLOR_VALUES;

const METRIC_PREFIXES = [
  { power: 12, label: "teraohms" },
  { power: 9, label: "gigaohms" },
  { power: 6, label: "megaohms" },
  { power: 3, label: "kiloohms" },
  { power: 0, label: "ohms" },
] as const;

function toOhms([first, second, multiplier]: Color[]): bigint {
  const significant = BigInt(
    COLOR_VALUES[first] * 10 + COLOR_VALUES[second],
  );

  return significant * 10n ** BigInt(COLOR_VALUES[multiplier]);
}

function formatOhms(value: bigint): string {
  for (const { power, label } of METRIC_PREFIXES) {
    const unit = 10n ** BigInt(power);

    if (value >= unit && value % unit === 0n) {
      return `${value / unit} ${label}`;
    }
  }

  return `${value} ohms`;
}

export function decodedResistorValue(colors: Color[]): string {
  return formatOhms(toOhms(colors));
}