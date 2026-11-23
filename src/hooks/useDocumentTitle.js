import { useEffect } from 'react';

/**
 * Sets document title with the DriveEase prefix.
 * @param {string} title
 */
export function useDocumentTitle(title) {
  useEffect(() => {
    const prevTitle = document.title;
    if (title) {
      document.title = `${title} | DriveEase Luxury Rentals`;
    }
    return () => {
      document.title = prevTitle;
    };
  }, [title]);
}
