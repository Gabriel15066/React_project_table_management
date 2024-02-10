import { useState } from 'react';
import './App.css';
import { Input } from './components/forms/Input';
import { Checkbox } from './components/forms/Checkbox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductCategoryRow } from './ProductCategoryRow';
import { ProductRow } from './products/ProductRow';

//Listes des produits
const PRODUCTS = [
  {category: "Fruits", price: '$1', stocked: true, name: "Apple" },
  {category: "Fruits", price: '$1', stocked: true, name: "Dragonfruit" },
  {category: "Fruits", price: '$2', stocked: false, name: "Passionfruit" },
  {category: "Vegetables", price: '$2', stocked: true, name: "Spinach" },
  {category: "Vegetables", price: '$4', stocked: false, name: "Pumpkin" },
  {category: "Vegetables", price: '$1', stocked: true, name: "Peas" }
]

//COMPOSANT 1
function App() {
//données
const [showStockedOnly, setShowStockedOnly] = useState(false)
const [search, setSearch] = useState('')
const visibleProducts = PRODUCTS.filter(product => {
  if (showStockedOnly && !product.stocked) {
    return false
  }
  if (search && !product.name.includes(search)) {
    return false
  }
    return true
})
//evenements

//affichage
  return <div className='container my-3'>
    <SearchBar
    showStockedOnly={showStockedOnly}
    onStockedOnlyChange={setShowStockedOnly}
    search={search}
    onSearchChange={setSearch}
    />
    <ProductTable products={visibleProducts}/>
  </div>
}

function SearchBar({showStockedOnly, onStockedOnlyChange, search, onSearchChange}) {
  //affichage
  return <div>
      <div className='mb-3'>
        <Input
        value={search}
        onChange={onSearchChange}
        placeholder="Rechercher..."
        />
        <Checkbox
        id = "stocked"
        checked={showStockedOnly}
        onChange={onStockedOnlyChange}
        label="N'afficher que les produits en stock"
        />
      </div>
    </div>
}

function ProductTable({products}) {
//données
const rows = []
let lastCategory = null
//events
for (let product of products) {
  if (product.category !== lastCategory) {
    rows.push(<ProductCategoryRow key={product.category} name={product.category}/>)
  }
  lastCategory = product.category
  rows.push(<ProductRow product={product} key={product.name}/>)
}
//affichage
  return <table className='table table-bordered table-light table-hover'>
    <thead className='table-dark'>
      <tr>
        <th>Nom</th>
        <th>Prix</th>
      </tr>
    </thead>
    <tbody className='table-success'>{rows}</tbody>
  </table>
}

export default App