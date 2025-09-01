import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "68b52bd46295020e0d4cf6d5", 
  requiresAuth: true // Ensure authentication is required for all operations
});
