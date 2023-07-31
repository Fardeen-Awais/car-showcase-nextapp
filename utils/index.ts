export async function fetchCar() {
    const headers = {
            'X-RapidAPI-Key': '29d90b3554msh4f40411e71d1f04p15ab47jsn6b5fabfe3381',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
    
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{headers:headers,});
    const result = await response.json()

    return result
}