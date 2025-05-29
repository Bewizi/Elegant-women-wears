export interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  description: string
  rating: number
  details?: string
  inStock?: boolean
  images?: string[]
}
