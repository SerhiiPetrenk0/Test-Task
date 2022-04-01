export const getProductsAPI = (setList) => {

    fetch('http://demo8021751.mockable.io/products')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setList(data.products)
      })
      
  };

export const postCommentAPI = (formValue) => {

    fetch('http://demo8021751.mockable.io/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formValue)
    })
     .then((response) => response.json())
     .then((result) =>  result.result.push(formValue))

}