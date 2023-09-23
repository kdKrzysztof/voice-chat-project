import { Button, Link, Typography } from '@mui/material';

import { StyledTextfield } from 'components';

import {
  CreateAccountText,
  LoginBody,
  LoginContainer,
  LoginSubtitle,
  LoginTitleContainer
} from './Login.styles';
import useLoginUtils from './Login.utils';

const Login = () => {
  const { t, handleSubmit, onSubmit, register, errors } = useLoginUtils();

  return (
    <LoginContainer elevation={4}>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <LoginBody>
          <LoginTitleContainer>
            <Typography variant="h4" fontWeight="bold">
              {t('LoginTitle')}
            </Typography>
            <LoginSubtitle variant="subtitle2">{t('LoginSubtitle')}</LoginSubtitle>
          </LoginTitleContainer>
          <StyledTextfield
            inputTitle="Email"
            register={register}
            formPropName="email"
            error={errors?.email?.message}
            required={true}
            fullWidth
          />
          <StyledTextfield
            inputTitle="Password"
            register={register}
            formPropName="password"
            error={errors?.password?.message}
            required={true}
            fullWidth
          />
          <Button variant="contained" fullWidth type="submit">
            {t('LoginButton')}
          </Button>
          <CreateAccountText variant="subtitle2">
            {t('LoginNeedAccount')} <Link href="/register">{t('LoginClickHere')}</Link>
          </CreateAccountText>
        </LoginBody>
      </form>
    </LoginContainer>
  );
};

export default Login;
