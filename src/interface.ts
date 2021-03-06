import { FormikErrors } from 'formik';
import { ChangeEventHandler, FormEventHandler } from 'react';

export interface TypeFormikLogInForm {
    errors: {
        email?: string,
        password?: string
    },
    values: TypeUserinfo,
    handleSubmit: FormEventHandler<HTMLFormElement>,
    handleChange: ChangeEventHandler<HTMLInputElement>,
    initialValues: TypeUserinfo,
    initialErrors?: FormikErrors<TypeUserinfo>,
    validationSchema?: TypeUserinfo
}

export interface TypeUserinfo {
    email: string,
    password: string
}

export interface TypePostForm {
    rating: string,
    comments: string
}

export interface TypeProduct {
    in_potential_products: boolean,
    asin: string,
    price: number,
    weight: number,
    updated_at: number,
    name: string,
    shipping_weight: null,
    domain: string,
    votes_count: number,
    daily_cashflow: number,
    currency: string,
    img: string,
    daily_sales: number,
    stars: number,
    bsr_value: number,
    brand_class: null,
    size: [number],
    link: string,
    bsr_category: string,
    brand: string
}

export interface TypeComment {
    asin: string,
    body: [TypePostForm]
}
