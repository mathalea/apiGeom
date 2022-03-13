const translations:{ [key: string]: string } = {
    'drag': 'drag',
    'pointLibre': 'freePoint',
    'droitePerpendiculaire': 'perpendicular',
    'mediatrice': 'perpendicularBissector',
    'pointIntersection': 'intersectionLL',
    'cerclePoint': 'circlePoint',
    'cercleRayon': 'circleRadius',
    'polygone': 'polygon'
}

export function translateButton(frenchWord: string) {
    if (translations[frenchWord]) return translations[frenchWord]
    else return frenchWord
}
