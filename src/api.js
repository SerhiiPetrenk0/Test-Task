const URL = 'http://demo8021751.mockable.io/';

export const getProductsAPI = async () => {
  const productsURL = `${URL}products`;
  const request = await fetch(productsURL);
  const data = await request.json();
  return data.products;
};

export const getCommentsAPI = async link => {
  const productsURL = `${URL}comments`;
  const request = await fetch(productsURL);
  const data = await request.json();
  return data.result.find(item => item.asin === link);
};

export const postCommentAPI = formValue => {
  const commentURL = `${URL}comments`;
  fetch(commentURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formValue)
  })
    .then(response => response.json())
    .then(result => result.result.push(formValue));
};

export const postUserInfoAPI = userInfo => {
  const commentURL = `${URL}user`;
  fetch(commentURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userInfo)
  })
   .then(response => response.json())
   .then(result => result );
};
