const titleMap = {
  "/": "Login",
  "/booking": "Booking",
};

/**
 * Returns the title of a page based on its route path.
 * @param {string} path - The path of the page route.
 * @returns {string} The title of the page with the site name appended.
 */

export const getTitleFromRoute = (path: string): string => {
  const inMapping = titleMap[path as keyof typeof titleMap];

  return inMapping
    ? `${titleMap[path as keyof typeof titleMap]} | Veyor Wellness`
    : "Not Found | Veyor Wellness";
};
