/*  DOC
- Définit la ligne de notre tableau contenant le nom de la catégorie de notre produit
* ({string} name (nom de la categorie)) --> product
* colSpan (va definir 2 colonnes)
*
*/

export function ProductCategoryRow({name}) {
//affichage
    return <tr>
        <td colSpan={2}>
            <strong>{name}</strong>
        </td>
    </tr>
}