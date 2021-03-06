import { Typos } from 'components/Typo';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { STYLES } from 'services/constants';
import styled from 'styled-components';

export default function OpenGraph() {
  const router = useRouter();
  const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    setTitle(searchParams.get('title') as string);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Typos.Heading1 style={{ fontSize: '70px', fontWeight: 600, lineHeight: 1.3, marginBottom: '60px', padding: '0 100px' }}>
        {title?.split('-').join(' ')}
      </Typos.Heading1>

      <ColumnWrapper>
        <Image src="/assets/logo.svg" priority width={200} height={200} alt="" />
        <Typos.Heading3>moonerd</Typos.Heading3>
      </ColumnWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  overflow-wrap: break-word;
  text-align: center;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${Typos.Heading3} {
    font-family: ${STYLES.font.msa};
    font-weight: 600;
    margin: 0;
  }
`;
