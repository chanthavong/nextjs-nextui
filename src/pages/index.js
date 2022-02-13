import Link from 'next/link';
import Head from '../components/head';
import { useTranslations } from 'next-intl';
import {
  Grid,
  Spacer,
  Container,
  Button,
  Input,
  Text,
  Col,
  Row,
} from '@nextui-org/react';

export default function () {
  const h = useTranslations('Home');
  const t = useTranslations('label');

  return (
    <Container align="center">
      <h2>{h('hello')}</h2>
      <Input placeholder={t('email')} id="email" />
      <Spacer y={0.5} />
      <Input.Password placeholder={t('password')} id="password" />
      <Spacer y={0.5} />
      <Button>{t('login')}</Button>
      <Spacer y={1} />
      <Link href="/lo" locale={false} >
        <a>ພາສາລາວ</a>
      </Link>
      &nbsp; &nbsp;
      <Link href="/en" locale={false}>
        <a>English</a>
      </Link>
    </Container>
  );
}
