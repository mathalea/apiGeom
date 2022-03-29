const translations:{ [key: string]: string } = {
    'drag': 'drag',
    'cacher': 'hide',
    'supprimer': 'erase',
    'pointLibre': 'freePoint',
    'pointSur' : 'pointOn',
    'pointMilieu': 'middle',
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
    'cercleRayon': 'circleRadius',
    'cercleCompas' : 'circleByDistanceAndCenter',
    'symetrieCentrale' : 'reflectAboutPoint',
    'symetrieAxiale' : 'reflectionOverLine',
}

export function translateButton(frenchWord: string) {
    if (translations[frenchWord]) return translations[frenchWord]
    else return frenchWord
}
