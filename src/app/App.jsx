import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

/**
 * Root Application Component.
 * Supplies routing context to the application.
 */
export function App() {
  return <RouterProvider router={router} />;
}

export default App;
