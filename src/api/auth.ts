
import { TypeLoginRequest } from "src/app/types/Auth";
import instance from "./instance";


export const signin = (user: TypeLoginRequest) => {
  const url = `/signin`;
  return instance.post(url, user);
}

export const signup = (user: TypeLoginRequest) => {
  const url = `/signup`;
  return instance.post(url, user);
}

export const list = () => {
  const url = '/user';
  return instance.get(url);
}

export const read = (_id: string) => {
  const url = `/user/${_id}`;
  return instance.get(url);
}
export const remove = (_id: string) => {
  const url = `/user/${_id}`;
  return instance.delete(url);
}

export const update = (user: TypeLoginRequest) => {
  const url = `/user/${user._id}`;
  return instance.put(url, user);
}

