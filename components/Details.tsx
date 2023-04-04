import React from 'react';
import { DetailData } from '@/pages/api/card/[id]';
import Detail from './Detail';

type Props = { details: DetailData[] };

const Details: React.FC<Props> = ({ details }: Props) => {
  console.log('details', details);
  const [detail] = details;
  return (
    <>
      <div>
        <Detail key={detail.id} detail={detail} />
      </div>
    </>
  );
};

export default Details;
