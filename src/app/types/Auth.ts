

export type TypeLoginRequest = {
  email: string,
  password: string
};

export type TypeLoginResponse = {
  accessToken: string,
  user: {
    _id: string,
    email: string,
    password: string
  }
  
};

export type TypeSignupResponse = {
  user: {
    _id: string,
    email: string,
    password: string
  }
}