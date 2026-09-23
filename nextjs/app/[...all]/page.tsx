import AppWrapper from '../../components/AppWrapper';
import { lists } from '../../mock';

export async function generateStaticParams() {
  return [
    { all: ['feed'] },
    { all: ['lists'] },
    ...lists.map(list => ({ all: ['lists', list.id] })),
    { all: ['settings'] },
  ];
}

export default function Page() {
  return <AppWrapper />;
}