/*
JS DOC:
* parameters:
* {string} placeholder
* {string} value
* {(s: string) => void} onChange
*/


export function Input ({placeholder, value, onChange}) {
    //données
    //events
    //affichage
        return <div>
            <input
                type="text"
                className="form-control"
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    }