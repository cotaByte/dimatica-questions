//Exercice: Is there a problem? (1 points)

/* Call web service and return count user, (got is library to call url)
async function getCountUsers() {
    return { total: await got.get('https://my-webservice.moveecar.com/users/count') };
}

// Add total from service with 20
async function computeResult() {
    const result = getCountUsers();
    return result.total + 20;
}


EXPLANATION
 
The problem with this code is that in the function computeResult() is not waiting for the result of 
the function getCountUsers(). With thaht being said, the function computeResult() always will return 20.

In order fix the code, we must use the reserved word 'await' before the call to the getCountUsers() in order to
wait for the return of the function getCountUsers().

The code will look like this: 
*/

// Call web service and return count user, (got is library to call url)
async function getCountUsers() {
    return { total: await got.get('https://my-webservice.moveecar.com/users/count') };
}

// Add total from service with 20
async function computeResult() {
    const result = await getCountUsers(); //add await
    return result.total + 20;
}
