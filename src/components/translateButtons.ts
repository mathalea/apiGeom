const translations:{ [key: string]: string } = {
    'drag': 'drag',
    'cacher': 'hide',
    'supprimer': 'erase',
    'pointLibre': 'freePoint',
    'pointCoordonnees': 'pointByCoords',
    'droite': 'line',
    'demiDroite': 'ray',
    'vecteur': 'vector',
    'polygone': 'polygon',
    'droitePerpendiculaire': 'perpendicular',
    'droiteParallele': 'parallel',
    'mediatrice': 'perpendicularBissector',
    'bissectrice': 'angleBissector',
    'pointIntersection': 'intersectionLL',
    'cerclePoint': 'circlePoint',
    'cercleRayon': 'circleRadius'
}

export function translateButton(frenchWord: string) {
    if (translations[frenchWord]) return translations[frenchWord]
    else return frenchWord
}
