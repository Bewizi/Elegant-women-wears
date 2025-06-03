export interface Product {
  id: string
  name: string
  price: number
  image: string
  category?: string
  description?: string
  rating?: number
  details?: string
  inStock?: boolean
  images?: string[]
  quantity?: number
}
