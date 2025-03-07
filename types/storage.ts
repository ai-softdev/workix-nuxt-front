export type TGoods = {
  id: number,
  title: string,
  photo: string,
  name: string,
  quantity: number,
  sub_category: {
    name: string,
    id: number,
  },
  vendorCode: string | number,
  description: string,
}
export interface ICurrentCategory{
  id: number,
  name: string,
  icon: string,
  slug: string,
  items: TGoods[]
}
export interface IScannedBarcode{
  [key: string]: any
}