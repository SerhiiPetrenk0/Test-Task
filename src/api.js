export const getProductsAPI = setList => {
    const productsURL= 'http://demo8021751.mockable.io/products'
    fetch(productsURL)
      .then(response => response.json())
      .then(data => setList(data.products))
};

export const postCommentAPI = formValue => {
    const commentURL = 'http://demo8021751.mockable.io/comments'
    fetch(commentURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formValue)
    })
     .then(response => response.json())
     .then(result => result.result.push(formValue))
};
