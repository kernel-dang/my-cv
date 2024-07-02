import { Layout } from './_layout/layout';
import './app.css';
import { Header } from './components/header/header';
import { MainContent } from './components/main-content/main-content';

export function App() {
  return (
    <Layout
      header={<Header></Header>}
      content={<MainContent></MainContent>}
    ></Layout>
  );
}

