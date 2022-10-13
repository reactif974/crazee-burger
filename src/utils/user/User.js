/* 
    function who check if user connected has a account
*/
export function checkHasExistingAccount(userDataBase, newName ) {
    return userDataBase.find((user) => user.username === newName)
}