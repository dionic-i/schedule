import { FC } from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import PersonsTimetableForm from './components/PersonsTimetableForm';

const App: FC = () => {
  return (
    <Layout header={<Header title="Найдем в какой день посидеть и поболтать!" />}>
      <PersonsTimetableForm />
    </Layout>
  );
};

export default App;
