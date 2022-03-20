import Layout from './components/Layout';
import Profile from './components/Profile';
import Repositories from './components/Repositories';
import { DefaultStyle } from './global/styles';
import { GithubProvider, useGithub } from './hooks/provider';

function App() {

  const { loading } = useGithub();

  return (
    <main>
      <GithubProvider>
        <DefaultStyle/>
        <Layout>
        {
          loading
          ? <p>Loading...</p>
          : <>
              <Profile/>
              <Repositories/>
            </>
        }
        </Layout>
      </GithubProvider>
    </main>
  );
}

export default App;
