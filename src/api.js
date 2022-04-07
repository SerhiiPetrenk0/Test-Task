const URL = 'http://demo8021751.mockable.io/';

export const getProductsAPI = async () => {
  console.log('getProductsAPI ==>>>>>>')
  const productsURL = `${URL}products`;
  const request = await fetch(productsURL);
  const data = await request.json();
  return data.products;
};

export const getCommentsAPI = async link => {
  console.log('getCommentsAPI ==>>>>>>')
  const productsURL = `${URL}comments`;
  const request = await fetch(productsURL);
  const data = await request.json();
  const chooseItem = data.result.find(item => item.asin === link);
  return chooseItem;
};

export const postCommentAPI = formValue => {
  console.log('postCommentAPI ==>>>>>>')
    const commentURL = `${URL}comments`;
    fetch(commentURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formValue)
    })
     .then(response => response.json())
     .then(result => result.result.push(formValue));
};
