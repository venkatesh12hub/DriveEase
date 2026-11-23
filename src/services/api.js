/**
 * Base API Client simulation
 * Formatted for standard REST API consumption when backend services are attached.
 */

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.driveease.luxury/v1';

export const apiClient = {
  get: async endpoint => {
    // Simulated fetch wrapper
    return { url: `${BASE_URL}${endpoint}`, status: 200 };
  },
  post: async (endpoint, payload) => {
    return { url: `${BASE_URL}${endpoint}`, payload, status: 201 };
  },
};
