export const getCurrentModeStyle = (
  isDarkMode = true,
  className: string
): string => `${className} ${isDarkMode ? "" : "light"}`;
