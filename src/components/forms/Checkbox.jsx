/*
JS DOC:
Checkbox avec un label à coté

* {boolean} checked : est ce que la case est cochée ou non
* {(v: boolean) => void} onChange: détecte si la case a été cochée ou decochée
*  {string} label : permet de faire de l'affichage a droite du bouton
*  {string}  id
*/

export function Checkbox ({checked, onChange, label, id}) {
    //données
    //events
    //affichage
        return <div className="form-check">
            <input
            id={id}
            type="checkbox"
            className="form-check-input"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            />
            <label className="form-check-label">{label}</label>
        </div>
    }