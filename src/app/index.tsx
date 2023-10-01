import './styles/index.scss';
import { withProviders } from "./providers";
import Pages from 'pages';

function App() {
  return (
    <div className="app">
      <header className="app__header"></header>
      <main className="app__main"><Pages/></main>
    </div>
  );
}

export default withProviders(App);
