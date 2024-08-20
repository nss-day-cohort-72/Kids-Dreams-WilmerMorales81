import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()


document.addEventListener (
    "click",
    (clickEvt) => {
        const sportTarget = clickEvt.target
        if (sportTarget.dataset.type === "celebrity")
            alert(`${sportTarget.dataset.name} is a ${sportTarget.dataset.sport} star`)

    }
)

export const Celebrities = () => {
    let html = "<ol>"

    for (const star of celebrities) {
        html += `<li
                    data-name=${star.name} 
                    data-id="${star.id}" 
                    data-type="celebrity"
                    data-sport="${star.sport}"
                    id="star--${star.id}">
                    ${star.name}
                </li>`
    }

    html += "</ol>"
    return html
}
