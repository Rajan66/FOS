import { GetServerSideProps } from 'next';
import { FC } from 'react';

interface IdPageProps {
  id: number;
}

const IdPage: FC<IdPageProps> = ({ id }) => {
  return (
    <div>
      <h1>Item ID: {id}</h1>
    </div>
  );
};

// Fetching data based on `id`
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;

  // Perform data fetching or other logic here if needed
  return {
    props: {
      id: parseInt(id as string),
    },
  };
};

export default IdPage;
