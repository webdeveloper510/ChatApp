/* @flow */
import React from 'react';

import { connect } from 'react-redux';

import { signIn } from '../actions/auth';
import { validateEmail, isEmpty } from '../helpers/validation';

import Input from '../Components/Input';
import { SecondaryButton } from '../Components/Button';
import Container from '../Components/Container';
import GoBack from '../Components/GoBackButton';

import type { Error, User } from '../types/types';
// import default from '../reducers/user';

type Props = {
  ValidationProps: ValidationProps,
  onSignIn: ({ email: string, password: string }) => User,
  onClearError: () => void,
  error: Error,
};

type ValidationProps = {
  errorType: string,
  errorMessage: string,
  validateFunction: Function,
  data: string,
};

type State = {
  email: string,
  password: string,
  emailError: string,
  passwordError: string,
};

class SignIn extends React.Component<void, Props, State> {
  static navigationOptions = ({ navigation }) => ({
    title: 'Sign In',
    headerLeft: (
      <GoBack
        onPress={() => {
          navigation.navigate('Main');
        }}
      />
    ),
  });

  input: Object;

  state = {
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    focusInput: false,
  };

  _validation = ({
    errorType,
    errorMessage,
    validateFunction,
    data,
  }: ValidationProps) => {
    if (validateFunction(data)) {
      this.setState({
        [errorType]: '',
      });
      return true;
    }
    this.setState({
      [errorType]: errorMessage,
    });
    return false; 
  };

  _validateData = () => {
    const isValidEmail = this._validation({
      errorType: 'emailError',
      errorMessage: 'Wrong type of email',
      validateFunction: validateEmail,
      data: this.state.email,
    });
    const isValidPassword = this._validation({
      errorType: 'passwordError',
      errorMessage: 'This field cannot be empty',
      validateFunction: isEmpty,
      data: this.state.password,
    });
    return isValidEmail && isValidPassword;
  };

  _signIn = () => {
    const signInData = {
      email: this.state.email,
      password: this.state.password,
    };
    if (this._validateData()) {
      this.props.onSignIn(signInData);
    }
  };

  componentWillUnmount() {
    this.props.onClearError();
  }

  render() {
    return (
      <Container justify="center" title="sign IN">
        <Input
          name="text"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email.toLowerCase()}
          error={this.state.emailError || this.props.error}
          onSubmitEditing={() => {
            this.input.focus();
          }}
        />
        <Input
          name="password"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          error={this.state.passwordError || this.props.error}
          secureTextEntry
          setRef={ref => {
            this.input = ref;
          }}
          onSubmitEditing={this._signIn}
        />
        <SecondaryButton title="login" onPress={this._signIn} />
      </Container>
    );
  }
}


  state => ({ error: state.error.signInError }),
  dispatch => ({
    onSignIn: data => {
      dispatch(signIn(data));
    },
    onClearError: () => {
      dispatch({ type: 'CLEAR_ERROR' });
    },
  });
export default SignIn;