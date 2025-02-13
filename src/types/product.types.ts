export interface IProduct {
  id: number
  title: string
  imageUrl: string
  price: string | number
  discount?: string | number
  quantity?: number
  //   priceWithoutDiscount: string | number
}
