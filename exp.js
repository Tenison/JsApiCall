/**
 * api call using fetch and promises
 */

 let api = 'url';//api url

 ///using the fetch function 
 ///fetch function takes a api url
 let newvar = fetch(api)
 ///then do something(which is in function), if api is successful 
 ///param "data" is a genenric data parameter representing [data returned from api call if successful]
 newvar.then(function(data) {
    console.log (data);/// could be an object [mey need deconstrution]
 })
 ///if there is an error use catch(catch needs a function to do something eg: print the error)
 ///param "err" is a genenric error parameter representing[type of error returned for the api call] 
 newvar.catch(function(err){
    console.log(err);
 })
 //--- summary

 let test = 'https://my-json-server.typicode.com/Tenison/jsonData/db/';

 //using chaining in JS
 let newvar1 = fetch(test).then((wrapedData)=>{
     //unwraping means converting from response object to json object
    return wrapedData.json();
    //unwraping the json instance
    //then we can get the data with another ""then""
 }).then((unwrapedData) =>{
     //why two thens - By design, the instant state and value of a promise cannot be inspected synchronously
     //api data is here
     //we can now attached that to anything
     document.getElementById("one").innerHTML = unwrapedData.codingChallenge[0].item;
    console.log(unwrapedData);
 }).catch((err) =>{
     console.log(err)
 });

/**-------------------------------------------------------------------------------------------------- */

/**
 * In JS(Latest ES8), which your writing a function that will execute in the
 * future or sometime later, you will need a promise function that
 * uses the {".then"} syntex OR {"async/await functions"}
 * A combination of both to make life easy.
 */




