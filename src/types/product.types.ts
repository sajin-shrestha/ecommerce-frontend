export interface IProduct {
  id: number
  title: string
  imageUrl: string
  price: string | number
  discount?: string | number
  //   priceWithoutDiscount: string | number
}
