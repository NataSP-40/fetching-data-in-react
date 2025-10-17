
const BASE_URL = `http://localhost:3000/weather/`;

const show = async (city) => {
    try {
        
        // const queryString = `&q=${city}`;
        // const res = await fetch(BASE_URL + queryString);
        
        //updated this using fetch() 
        const res = await fetch(BASE_URL + city);

        const data = await res.json();
        // console.log('Data:', data);
        return data;
    } catch (err) {
        console.log(err);
    }
}; 

// show('Chicago');
export { show };