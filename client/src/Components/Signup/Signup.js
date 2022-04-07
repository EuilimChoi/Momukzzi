import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Provider, useSelector, useDispatch, connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const SignUpForm = styled.div`
  margin: 0 auto;
  width: 550px;
  height: 740px;
  font-weight: 700;
  text-align: left;
  transform: translateY(20%);
  border-radius: 5px;
  background-color: white;
`;

const Div = styled.div`
  margin: 0 auto;
  padding-top: 20px;
  width: 440px;
  height: 100%;
  /* border: 1px solid black; */

  & > img {
    width: 300px;
    margin-left: 75px;
  }
`;

const InputForm = styled.div`
  margin: 0 auto;
  margin: 5px;
`;
const ValidateMsg = styled.div`
  display: ${(props) => (props.hide ? "none" : "")};
  margin: 5px;
`;

const Input = styled.input`
  width: 390px;
  border-style: none;
  height: 35px;
  margin-left: 5px;
  font-size: 13px;
  :focus {
    outline: none;
  }
`;

const InputBox = styled.div`
  width: 430px;
  height: 40px;
  border: solid 1px gainsboro;
  border-radius: 5px;
`;

const SignUpButton = styled.div`
  width: 430px;
  height: 45px;
  margin: 30px auto 0 auto;

  border-radius: 5px;
  text-align: center;
  background-color: #ffba34;
  color: white;
  cursor: pointer;
  line-height: 40px;
`;

function Signup(props) {
  // document.body.style.overflow = "hidden";
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRetype, setPasswordRetype] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [hideLengthFail, setHideLengthFail] = useState(true);
  const [hideIDFail, setHideIDFail] = useState(true);
  const [hideIDCheckFail, setHideIDCheckFail] = useState(true);
  const [hideEmailFail, setHideEmailFail] = useState(true);
  const [hidePasswordEquelFail, setHidePasswordEquelFail] = useState(true);
  const [hidePasswordFail, setHidePasswordFail] = useState(true);
  const [hideNameFail, setHideNameFail] = useState(true);

  const isMoreThan4Length = () => {
    if (userId.length < 4) {
      setHideLengthFail(() => false);
      return false;
    } else {
      setHideLengthFail(() => true);
      return true;
    }
  };

  const onlyNumberAndEnglish = () => {
    if (/^[A-Za-z][A-Za-z0-9]*$/.test(userId)) {
      setHideIDFail(() => true);
      return true;
    } else {
      setHideIDFail(() => false);
      return false;
    }
  };

  const isEmailValidate = () => {
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-z]+$/.test(email)) {
      setHideEmailFail(true);
      return true;
    } else {
      setHideEmailFail(false);
      return false;
    }
  };
  const isPasswordEquel = () => {
    if (password === passwordRetype) {
      setHidePasswordEquelFail(true);
      return true;
    } else {
      setHidePasswordEquelFail(false);
      return false;
    }
  };

  const isPasswordValidate = () => {
    if (
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
        password
      )
    ) {
      setHidePasswordFail(true);
      return true;
    } else {
      setHidePasswordFail(false);
      return false;
    }
  };

  const nameCheck = () => {
    if (name === "") {
      setHideNameFail(false);
      return false;
    } else {
      setHideNameFail(true);
      return true;
    }
  };

  const submit = () => {
    if (
      isMoreThan4Length() &&
      onlyNumberAndEnglish() &&
      isEmailValidate() &&
      isPasswordEquel() &&
      isPasswordValidate() &&
      nameCheck()
    ) {
      axios
        .post(
          `https://localhost:4000/users`,
          {
            userid: userId,
            password: password,
            nickname: name,
            email: email,
          },
          { withCredentials: true }
        )
        .then((response) => {
          if (response.data.message === "exist") {
            setHideIDCheckFail(false);
            console.log(response.data);
          } else if (response.data.message === "created") {
            setHideIDCheckFail(true);
            console.log(response.data);
            window.location.replace("/");
          }
        })
        .catch((err) => {
          throw err;
        });
    }
  };
  const dispatch = useDispatch();
  return (
    <ModalBackdrop
      onClick={() => {
        dispatch({ type: "signup modal" });
      }}
    >
      <SignUpForm onClick={(e) => e.stopPropagation()}>
        <Div>
          <img src="https://cdn.discordapp.com/attachments/947685049682247701/961421667157016686/logo-removebg-preview.png"></img>
          <InputForm>
            <div>아이디</div>
            <InputBox>
              <Input type="text" onChange={(e) => setUserId(e.target.value)} />
            </InputBox>
            <ValidateMsg hide={hideLengthFail}>
              아이디는 네 글 자 이상이여야 합니다.
            </ValidateMsg>
            <ValidateMsg hide={hideIDFail}>
              아이디는 영어 또는 숫자만 가능합니다.
            </ValidateMsg>
            <ValidateMsg hide={hideIDCheckFail}>
              중복된 아이디 입니다.
            </ValidateMsg>
          </InputForm>

          <InputForm>
            <div>Email</div>
            <InputBox>
              <Input type="text" onChange={(e) => setEmail(e.target.value)} />
            </InputBox>
            <ValidateMsg hide={hideEmailFail}>
              올바른 이메일 형식을 입력해주세요
            </ValidateMsg>
          </InputForm>

          <InputForm>
            <div>비밀번호</div>
            <InputBox>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputBox>
          </InputForm>

          <InputForm>
            <div>비밀번호 확인</div>
            <InputBox>
              <Input
                type="password"
                onChange={(e) => setPasswordRetype(e.target.value)}
              />
            </InputBox>
            <ValidateMsg hide={hidePasswordEquelFail}>
              비밀번호가 일치하지 않습니다.
            </ValidateMsg>
            <ValidateMsg hide={hidePasswordFail}>
              비밀번호는 최소 8자 이상, 알파벳과 숫자 및 특수문자를 포함해야
              합니다.
            </ValidateMsg>
          </InputForm>

          <InputForm>
            <div>이름</div>
            <InputBox>
              <Input type="text" onChange={(e) => setName(e.target.value)} />
            </InputBox>
            <ValidateMsg hide={hideNameFail}>
              이름은 필수입력입니다.
            </ValidateMsg>
          </InputForm>

          <SignUpButton onClick={submit}>가입하기</SignUpButton>
        </Div>
      </SignUpForm>
    </ModalBackdrop>
  );
}

export default Signup;
