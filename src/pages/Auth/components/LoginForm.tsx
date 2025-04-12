import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, TextField } from '@mui/material';
import useLogin from '../../../api/Auth/useLogin';
import useUserInfo from '../../../store/UserInfo';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const login = useLogin();
  const navigate = useNavigate();

  const { setID, setBoardName } = useUserInfo();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoginError(' ');
    if (!userId) {
      setLoginError('닉네임을 입력해주세요');
      return;
    }
    if (!password) {
      setLoginError('비밀번호를 입력해주세요');
    }
    try {
      const response = await login(userId, password);
      setID(response.data.board_id);
      setBoardName(userId);

      navigate(`/board/${response.data.board_id}`);
    } catch (error) {
      if (error instanceof Error) {
        setLoginError(error.message);
      } else {
        setLoginError('예상치 못한 오류가 발생했습니다.');
      }
    }
  };

  return (
    <LoginFormBox onSubmit={handleSubmit}>
      <TextFieldContainer>
        <LoginTextField
          type='text'
          variant='filled'
          label='닉네임'
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </TextFieldContainer>
      <TextFieldContainer>
        <LoginTextField
          variant='filled'
          label='비밀번호'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </TextFieldContainer>
      <SubmitButton variant='contained' type='submit'>
        칠판 확인하기
      </SubmitButton>
      {<ErrorText>{loginError || ' '}</ErrorText>}
    </LoginFormBox>
  );
};

const LoginFormBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextFieldContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 350px;
  margin-bottom: 16px;
  border-radius: 8px;
  position: relative;
  color: white;

  /* 하단 흰 줄 */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: white;
    border-radius: 4px;
  }
`;

const LoginTextField = styled(TextField)`
  width: 100%;
`;

const SubmitButton = styled(Button)`
  && {
    width: 200px;
    margin: 10px;
    color: #013c24;
    border-radius: 30px;
    max-width: 350px;
    background: white;
    font-size: 16px;
    padding: 10px;
    text-transform: none;
    &:hover {
      background: #f0f0f0;
    }
  }
`;

const ErrorText = styled.div`
  color: red;
  font-size: 0.875rem;
  text-align: center;
  margin-top: 8px;
  min-height: 1.2rem;
`;

export default LoginForm;
