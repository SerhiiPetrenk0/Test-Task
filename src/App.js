import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListProducts } from "./screens/ListProducts/ListProducts"
import { ItemProducts } from './screens/ItemProducts/ItemProducts';
const item = {

  "in_potential_products": false,
  "asin": "B076PZMK42",
  "price": 23.99,
  "weight": 1.45945844,
  "updated_at": 1537214948000.0,
  "name": "ADD ONE +1 Luxury Slim Bridge Bathtub Caddy Bath Tray Rack Bathroom Accessories, White",
  "shipping_weight": null,
  "domain": "uk",
  "votes_count": 50,
  "daily_cashflow": 263.89,
  "currency": "GBP",
  "img": "https://m.media-amazon.com/images/I/41bkOrhby9L._AC_.jpg",
  "daily_sales": 11,
  "stars": 4.4,
  "bsr_value": 13067,
  "brand_class": null,
  "size": [
      10.8661476,
      19.68505,
      6.299216
  ],
  "link": "https:\/\/www.amazon.co.uk\/ADD-ONE-Bathtub-Bathroom-Accessories\/dp\/B076PZMK42\/ref=sr_1_23?ie=UTF8&qid=1537222143&sr=8-23&keywords=bath+shelf",
  "bsr_category": "Home & Kitchen",
  "brand": "ADD ONE +1"
}


function App() {
  return (
    <div className="App">
     {/* <ItemProducts item={item} />  */}
     <ListProducts /> 
    </div>
  );
}

export default App;
