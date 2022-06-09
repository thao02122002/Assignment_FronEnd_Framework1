
export type Category = {
  _id: string, // nếu dùng nodejs thì id để string
  name: string,
  status: number,
  image: string
  
}

export type CategoryCreate = {
  name?: string,
  status?: number
  image?: string
}

