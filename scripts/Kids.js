import { getChildren } from "./database.js"

const children = getChildren()



document.addEventListener (
    "click",

(clickEvent) => {
    const kidTarget = clickEvent.target
    if ( kidTarget.dataset.type === "child") {
        alert(`${kidTarget.dataset.name}'s wish is ${kidTarget.dataset.wish}`)
    }
}
)

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" data-name=${child.name} data-type="child" data-wish="${child.wish}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}


