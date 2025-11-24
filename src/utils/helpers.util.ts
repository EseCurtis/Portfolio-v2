export function pickRandomColor(name: string, color?: string): string {
  // Return provided color if it exists
  if (color) {
    return color;
  }

  const colors = [
    '#BD2DCB',
    '#E13065',
    '#08A563',
    '#34AFAD',
    '#6A2DFF',
    '#EF6510',
  ];

  // Simple hash function to generate a number from the name
  let hash = 0;
  for (let i = 0; i < name?.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Ensure hash is positive and get index within colors array length
  const index = Math.abs(hash) % colors.length;

  return colors[index];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cn(...classNames: any[])  {
    return classNames.map(String).join(" ")
}