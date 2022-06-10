

export type TypeLoginRequest = {
  _id: string,
  email: string,
  password: string,
  role?: number
};

export type TypeLoginResponse = {
  accessToken: string,
  user: {
    _id: string,
    email: string,
    password: string,
    role?: number
  }
  
};

export type TypeSignupResponse = {
  user: {
    _id: string,
    email: string,
    password: string
  }
}