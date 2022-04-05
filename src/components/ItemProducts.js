import React, { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { PostForm, Comment } from './';
import { useParams } from 'react-router-dom';
import * as Styled from '../styled/ItemProducts';
import { loadProduct } from '../redux/redusers/productsReduser';
import { useSelector, useDispatch } from 'react-redux';

const ListComment = {
        "result":[
            {
            "asin": "B0721KZHWT",
            "body": [
                {
                "rating": "4",
                "comments": "Odio ut qui. Autem cumque deleniti. Quia provident inventore. Enim ipsum totam."
                },
                {
                "rating": "2",
                "comments": "Doloremque error adipisci. Deserunt voluptate eos. Voluptate nulla reprehenderit. In quo cum."
                },
                {
                "rating": "3",
                "comments": "Voluptates deserunt provident. Ut omnis aut. Inventore rerum eos."
                },
                {
                "rating": "1",
                "comments": "Et illo sed. Perspiciatis deserunt repudiandae. Adipisci sint maxime. Quasi voluptatem dolor."
                },
                {
                "rating": "5",
                "comments": "Ea voluptatem ratione. Ut voluptatem a."
                }
            ]
            },
            {
            "asin": "B01HI4E470",
            "body": [
                {
                "rating": "1",
                "comments": "Voluptas vel quo. Eos officia voluptatibus. Ipsa asperiores ad. Aut nisi occaecati."
                },
                {
                "rating": "4",
                "comments": "Autem qui maxime."
                },
                {
                "rating": "3",
                "comments": "Et illo sed. Perspiciatis deserunt repudiandae. Adipisci sint maxime. Quasi voluptatem dolor."
                },
                {
                "rating": "5",
                "comments": "Ea voluptatem ratione. Ut voluptatem a."
                }
    
            ]
            },
            {
            "asin": "B078PG3PLC",
            "body": [
                {
                "rating": "4",
                "comments": "Tempora hic nisi. Velit ratione incidunt."
                },
                {
                "rating": "2",
                "comments": "Voluptates sint corporis."
                }
            ]
            },
            {
            "asin": "B071GSVG5N",
            "body": [
                {
                "rating": "4",
                "comments": "Odio ut qui. Autem cumque deleniti. Quia provident inventore. Enim ipsum totam."
                },
                {
                "rating": "2",
                "comments": "Doloremque error adipisci. Deserunt voluptate eos. Voluptate nulla reprehenderit. In quo cum."
                },
                {
                "rating": "3",
                "comments": "Voluptates deserunt provident. Ut omnis aut. Inventore rerum eos."
                },
                {
                "rating": "1",
                "comments": "Et illo sed. Perspiciatis deserunt repudiandae. Adipisci sint maxime. Quasi voluptatem dolor."
                },
                {
                "rating": "5",
                "comments": "Ea voluptatem ratione. Ut voluptatem a."
                }
            ]
            },
            {
            "asin": "B079J472BX",
            "body": [
                {
                "rating": "1",
                "comments": "Voluptas vel quo. Eos officia voluptatibus. Ipsa asperiores ad. Aut nisi occaecati."
                },
                {
                "rating": "4",
                "comments": "Autem qui maxime."
                },
                {
                "rating": "3",
                "comments": "Et illo sed. Perspiciatis deserunt repudiandae. Adipisci sint maxime. Quasi voluptatem dolor."
                },
                {
                "rating": "5",
                "comments": "Ea voluptatem ratione. Ut voluptatem a."
                }
    
            ]
            },
            {
            "asin": "B0756DNVJZ",
            "body": [
                {
                "rating": "4",
                "comments": "Tempora hic nisi. Velit ratione incidunt."
                },
                {
                "rating": "2",
                "comments": "Voluptates sint corporis."
                }
            ]
            },
            {
            "asin": "B075WNSYMX",
            "body": [
                {
                "rating": "4",
                "comments": "Odio ut qui. Autem cumque deleniti. Quia provident inventore. Enim ipsum totam."
                },
                {
                "rating": "2",
                "comments": "Doloremque error adipisci. Deserunt voluptate eos. Voluptate nulla reprehenderit. In quo cum."
                },
                {
                "rating": "3",
                "comments": "Voluptates deserunt provident. Ut omnis aut. Inventore rerum eos."
                },
                {
                "rating": "1",
                "comments": "Et illo sed. Perspiciatis deserunt repudiandae. Adipisci sint maxime. Quasi voluptatem dolor."
                },
                {
                "rating": "5",
                "comments": "Ea voluptatem ratione. Ut voluptatem a."
                }
            ]
            },
            {
            "asin": "B07CSLBFVC",
            "body": [
                {
                "rating": "1",
                "comments": "Voluptas vel quo. Eos officia voluptatibus. Ipsa asperiores ad. Aut nisi occaecati."
                },
                {
                "rating": "4",
                "comments": "Autem qui maxime."
                },
                {
                "rating": "3",
                "comments": "Et illo sed. Perspiciatis deserunt repudiandae. Adipisci sint maxime. Quasi voluptatem dolor."
                },
                {
                "rating": "5",
                "comments": "Ea voluptatem ratione. Ut voluptatem a."
                }
    
            ]
            },
            {
            "asin": "B00T4JSES8",
            "body": [
                {
                "rating": "4",
                "comments": "Tempora hic nisi. Velit ratione incidunt."
                },
                {
                "rating": "2",
                "comments": "Voluptates sint corporis."
                }
            ]
            },
            {
            "asin": "B0788GFQ12",
            "body": [
                {
                "rating": "4",
                "comments": "Odio ut qui. Autem cumque deleniti. Quia provident inventore. Enim ipsum totam."
                },
                {
                "rating": "2",
                "comments": "Doloremque error adipisci. Deserunt voluptate eos. Voluptate nulla reprehenderit. In quo cum."
                },
                {
                "rating": "3",
                "comments": "Voluptates deserunt provident. Ut omnis aut. Inventore rerum eos."
                },
                {
                "rating": "1",
                "comments": "Et illo sed. Perspiciatis deserunt repudiandae. Adipisci sint maxime. Quasi voluptatem dolor."
                },
                {
                "rating": "5",
                "comments": "Ea voluptatem ratione. Ut voluptatem a."
                }
            ]
            },
            {
            "asin": "B077VLKZB2",
            "body": [
                {
                "rating": "1",
                "comments": "Voluptas vel quo. Eos officia voluptatibus. Ipsa asperiores ad. Aut nisi occaecati."
                },
                {
                "rating": "4",
                "comments": "Autem qui maxime."
                },
                {
                "rating": "3",
                "comments": "Et illo sed. Perspiciatis deserunt repudiandae. Adipisci sint maxime. Quasi voluptatem dolor."
                },
                {
                "rating": "5",
                "comments": "Ea voluptatem ratione. Ut voluptatem a."
                }
    
            ]
            },
            {
            "asin": "B000TV1VCG",
            "body": [
                {
                "rating": "4",
                "comments": "Tempora hic nisi. Velit ratione incidunt."
                },
                {
                "rating": "2",
                "comments": "Voluptates sint corporis."
                }
            ]
            },
            {
            "asin": "B01N2HM1FU",
            "body": [
                {
                "rating": "4",
                "comments": "Odio ut qui. Autem cumque deleniti. Quia provident inventore. Enim ipsum totam."
                },
                {
                "rating": "2",
                "comments": "Doloremque error adipisci. Deserunt voluptate eos. Voluptate nulla reprehenderit. In quo cum."
                },
                {
                "rating": "3",
                "comments": "Voluptates deserunt provident. Ut omnis aut. Inventore rerum eos."
                },
                {
                "rating": "1",
                "comments": "Et illo sed. Perspiciatis deserunt repudiandae. Adipisci sint maxime. Quasi voluptatem dolor."
                },
                {
                "rating": "5",
                "comments": "Ea voluptatem ratione. Ut voluptatem a."
                }
            ]
            },
            {
            "asin": "B078F5NYL9",
            "body": [
                {
                "rating": "1",
                "comments": "Voluptas vel quo. Eos officia voluptatibus. Ipsa asperiores ad. Aut nisi occaecati."
                },
                {
                "rating": "4",
                "comments": "Autem qui maxime."
                },
                {
                "rating": "3",
                "comments": "Et illo sed. Perspiciatis deserunt repudiandae. Adipisci sint maxime. Quasi voluptatem dolor."
                },
                {
                "rating": "5",
                "comments": "Ea voluptatem ratione. Ut voluptatem a."
                }
    
            ]
            },
            {
            "asin": "B07FPBS3Q2",
            "body": [
                {
                "rating": "4",
                "comments": "Tempora hic nisi. Velit ratione incidunt."
                },
                {
                "rating": "2",
                "comments": "Voluptates sint corporis."
                }
            ]
            },
            {
            "asin": "B006VA9O5K",
            "body": [
                {
                "rating": "4",
                "comments": "Odio ut qui. Autem cumque deleniti. Quia provident inventore. Enim ipsum totam."
                },
                {
                "rating": "2",
                "comments": "Doloremque error adipisci. Deserunt voluptate eos. Voluptate nulla reprehenderit. In quo cum."
                },
                {
                "rating": "3",
                "comments": "Voluptates deserunt provident. Ut omnis aut. Inventore rerum eos."
                },
                {
                "rating": "1",
                "comments": "Et illo sed. Perspiciatis deserunt repudiandae. Adipisci sint maxime. Quasi voluptatem dolor."
                },
                {
                "rating": "5",
                "comments": "Ea voluptatem ratione. Ut voluptatem a."
                }
            ]
            },
            {
            "asin": "B076PZMK42",
            "body": [
                {
                "rating": "1",
                "comments": "Voluptas vel quo. Eos officia voluptatibus. Ipsa asperiores ad. Aut nisi occaecati."
                },
                {
                "rating": "4",
                "comments": "Autem qui maxime."
                },
                {
                "rating": "3",
                "comments": "Et illo sed. Perspiciatis deserunt repudiandae. Adipisci sint maxime. Quasi voluptatem dolor."
                },
                {
                "rating": "5",
                "comments": "Ea voluptatem ratione. Ut voluptatem a."
                }
    
            ]
            },
            {
            "asin": "B00X0XGSVY",
            "body": [
                {
                "rating": "4",
                "comments": "Tempora hic nisi. Velit ratione incidunt."
                },
                {
                "rating": "2",
                "comments": "Voluptates sint corporis."
                }
            ]
            },
            {
            "asin": "B00BEDAW9Q",
            "body": [
                {
                "rating": "4",
                "comments": "Odio ut qui. Autem cumque deleniti. Quia provident inventore. Enim ipsum totam."
                },
                {
                "rating": "2",
                "comments": "Doloremque error adipisci. Deserunt voluptate eos. Voluptate nulla reprehenderit. In quo cum."
                },
                {
                "rating": "3",
                "comments": "Voluptates deserunt provident. Ut omnis aut. Inventore rerum eos."
                },
                {
                "rating": "1",
                "comments": "Et illo sed. Perspiciatis deserunt repudiandae. Adipisci sint maxime. Quasi voluptatem dolor."
                },
                {
                "rating": "5",
                "comments": "Ea voluptatem ratione. Ut voluptatem a."
                }
            ]
            },
            {
            "asin": "B0787HND43",
            "body": [
                {
                "rating": "1",
                "comments": "Voluptas vel quo. Eos officia voluptatibus. Ipsa asperiores ad. Aut nisi occaecati."
                },
                {
                "rating": "4",
                "comments": "Autem qui maxime."
                },
                {
                "rating": "3",
                "comments": "Et illo sed. Perspiciatis deserunt repudiandae. Adipisci sint maxime. Quasi voluptatem dolor."
                },
                {
                "rating": "5",
                "comments": "Ea voluptatem ratione. Ut voluptatem a."
                }
    
            ]
            }
        ]
    };


export const ItemProducts = props => {
    const [ itemProduct, setItemProduct ] = useState([]);
    const [ itemComments, setItemComments ] = useState([]);
    const items = useSelector(store => store.products);
    const dispatch = useDispatch();
    const linkProduct = useParams();

    const checkStore = () => items.length === 0 && dispatch(loadProduct());

    const chooseProduct = () => {
        const chooseItem = items.find(item => item.asin === linkProduct.id);
        setItemProduct(chooseItem);
    };
    const chooseComments = () => {
        const chooseItem = ListComment.result.find(item => item.asin === linkProduct.id);
        setItemComments(chooseItem.body);
    };

    const renderComment = itemComments.map((item, index) => <Comment key={index} ListComment={item} />);

    useEffect(() => {
        checkStore();
        chooseProduct();
        chooseComments();
    });
    
    return (
        <Styled.Container>
            {itemProduct && 
                <Row>
                    <Styled.ColImg lg="6">
                        <Styled.CImg>
                            <Styled.CardImg src={itemProduct.img} />
                        </Styled.CImg>
                    </Styled.ColImg>
                    <Col>
                        <Styled.Card>
                        <Card.Body>
                            <Card.Title>{itemProduct.brand}</Card.Title>
                            <Card.Text>
                            {itemProduct.name}
                            </Card.Text>
                             {renderComment} 
                        </Card.Body>
                        </Styled.Card>
                        <PostForm />
                    </Col>
                </Row>
            }
        </Styled.Container>
    );
};
