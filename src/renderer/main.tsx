// renderer/main.tsx
import { render } from 'solid-js/web';
//import { hmr } from 'solid-refresh';
import App from './solid/components/App';

const root = document.getElementById('root');

const dispose = render(() => <App />, root);

// if (import.meta.env.DEV) {
//   hmr(dispose, import.meta.url);
// }