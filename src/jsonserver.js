const url = 'http://localhost:8080/form-details'

const postToForm = async (data) => {

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        
        return await response.json();
    }
    
    catch(e) {
        console.log('There was an error: ', e)
    }
}

const getFormDetails = async (id) => {

    try {

        if (id) {            
            const response = await fetch(`${url}/${id}`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
    
            if (!response) {
                return ''
            }
    
            const data = await response.json();
            return data; 
        }

        return ''
    }

    catch(e) {
        console.log('There was an error: ', e)
    }

}

const getAllDetails = async () => {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        return data;

    } catch (e) {
        console.log('There was an error: ', e);
    }
}
const getDetail = async (id) => {
    try {
        const response = await fetch(`${url}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        return data;

    } catch (e) {
        console.log('There was an error: ', e);
    }
}
const resetDetail = async (id) => {
    try {
        const response = await fetch(`${url}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ details: [] })
        });

    } catch (e) {
        console.log('There was an error: ', e);
    }
}


const patchDetails = async (id, newDetail) => {
    try {
        const response = await fetch(`${url}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ details: newDetail })
        });

        const data = await response.json();
        return data;

    } catch (e) {
        console.log('There was an error: ', e);
    }
}


export { postToForm, getFormDetails, getAllDetails,getDetail,resetDetail, patchDetails }
