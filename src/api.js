const URL = 'http://demo8021751.mockable.io/';

export const getProductsAPI = setList => {
    const productsURL = `${URL}products`;
    fetch(productsURL)
      .then(response => response.json())
      .then(data => setList(data.products));
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
