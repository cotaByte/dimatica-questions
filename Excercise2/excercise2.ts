//Exercice: Is there a problem? (2 points)

// Call web service and return total vehicles, (got is library to call url)
async function getTotalVehicles() {
    return await got.get('https://my-webservice.moveecar.com/vehicles/total');
}

function getPlurial() {
    let total;
    getTotalVehicles().then(r => total = r);
    if (total <= 0) {
        return 'none';
    }
    if (total <= 10) {
        return 'few';
    }
    return 'many';
}


/*EXPLANATION
 
The problem with this code is that in the function getPlurial() is not waiting for the result of 
the function getTotalVehicles(). Although the asignation of the variable 'total' is correctly in the then method,
the code below is not waiting for this asignation, so the value of total will always be undefined.

In order fix the code, we must use the reserved word 'await' before the call to the getTotalVehicles() in order to
wait for the return of the function getTotalVehicles(), converting the function getPlurial into an async function,as he has
among his code an await reserved word.

The code will look like this: 
*/
// Call web service and return total vehicles, (got is library to call url)
async function getTotalVehicles() {
    return await got.get('https://my-webservice.moveecar.com/vehicles/total');
}

async function getPlurial() {
    let total;
    await getTotalVehicles().then(r => total = r);
    if (total <= 0) {
        return 'none';
    }
    if (total <= 10) {
        return 'few';
    }
    return 'many';
}