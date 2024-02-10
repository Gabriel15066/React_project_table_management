/*
JS DOC:
- Définit les lignes de notre tableau à 2 colonnes qui contiennent le nom et le prix du produit
* product: produits concernés
* ({string} name {string} price {boolean} stocked) --> product
*/

export function ProductRow({product}) {
//Données
const style = product.stocked ? undefined : {color: 'red'}  //Va mettre en rouge les produits qui ne sont pas en stock
//events

//affichage
    return <tr>
        <td style={style}>{product.name}</td>
        <td>{product.price}</td>
    </tr>
}
