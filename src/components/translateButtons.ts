const translations:{ [key: string]: string } = {
    'drag': 'drag',
    'pointLibre': 'freePoint',
    'droitePerpendiculaire': 'perpendicular',
    'mediatrice': 'perpendicularBissector'
}

export function translateButton(frenchWord: string) {
    if (translations[frenchWord]) return translations[frenchWord]
    else return frenchWord
}
