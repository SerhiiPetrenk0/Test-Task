import * as Yup from 'yup';

export const YopLoginForm = Yup.object({
    email: Yup
    .string()
    .max(30, 'Max simbol 30))')
    .required('* this field is required')
    .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ , 'Invalid email'),
    password: Yup
    .string()
    .min(6, 'Too Short!')
    .max(30, 'Max simbol 30))')
    .required('* this field is required')
    .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/ , 'Your password must be 6 to 16 characters long, contain letters, numbers, special characters !@#$%^&*, And no spaces or emojis.')
  });
