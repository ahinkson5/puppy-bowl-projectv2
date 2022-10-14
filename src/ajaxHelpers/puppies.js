// fetch puppies
export const fetchPuppies= async ()=> {
    const response = await fetch (
        'https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-PT-WEB-FT/players'
    );
    const result = await response.json();
    return result;
};

// fetch puppy by id
export const fetchPuppyById = async (id) => {
    const repsonse = await fetch(
        'https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-PT-WEB-FT/players/${id}' 
    );
    const result = await repsonse.json();
    return result
};

// create puppy
export const createPuppy = async (name, email) => {
    const response = await fetch( 
        'https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-PT-WEB-FT/players',
        {
            method:"Post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name, 
                email,
            }),
        }
        );
        const result = await response.json();
        return result;
};

// delete puppy

export const deletePuppyById = async (id) => {
    const response = await fetch(
        'https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-PT-WEB-FT/players/${id}',
        {
            method: "Delete",
            headers:{
                "Content-Type": "application/json",
            },
        }
    );
    const result = await response.json();
    return result;
};
