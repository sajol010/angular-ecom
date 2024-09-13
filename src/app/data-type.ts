export interface SigUp{
    name: string,
    password: string,
    email: string
}

export interface SigIn{
    email: string,
    password: string
}

export interface Product{
    id: string,
    name: string,
    price: number,
    category: string,
    color: string,
    description: string,
    image: string
}