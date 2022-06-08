
export type Product = {
  _id: string, // nếu dùng nodejs thì id để string
  name: string,
  status: number
  price: number,
  salePrice: number,
  description: string,
  imageUrl: string,
  // category: number
}

export type ProductCreate = {
  name?: string,
  status?: number
  price?: number,
  salePrice?: number,
  description?: string,
  imageUrl?: string,
  // category?: number
}