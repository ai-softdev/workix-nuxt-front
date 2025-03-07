export interface Permission {
    id: string,
    name: string,
    name_en: string,
}

export interface User {
    id: string,
    first_name: string,
    last_name: string,
    patronymic: string,
    email: string,
    phone: string,
    password: string,
    passport: string
    department: object,
    salary: string
    photo: string,
    permissions: Permission[]
}