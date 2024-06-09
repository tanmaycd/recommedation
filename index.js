import readline from "readline"
import decisionmaker from "./Modules/decision.js"
import recommendation from "./Modules/recommendationgenerator.js"



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function prompt_decisionmaker(){
rl.question('enter your options seperated by comma',(optionlist)=>{
 let options_array=optionlist.split(',').map(option => option.trim());
let decision_made=decisionmaker(options_array);
console.log(`Decision: ${decision_made}`);

        rl.close();
})
}

function prompt_recommendation(){
    rl.question('Enter your preferences from ',(input)=>{
let r=recommendation(parsePreferences(input));
console.log(`Recommendation: ${r}`);
        rl.close();
    })

}

function parsePreferences(input) {
    // Split the input string by comma to get an array of preferences
    const preferencesArray = input.split(',').map(preference => preference.trim());

    // Create a JavaScript object with preferences array
    const preferencesObject = {
        preferences: preferencesArray
    };

    // Convert the JavaScript object to a JSON string
    const jsonString = JSON.stringify(preferencesObject);

    return jsonString;
}


rl.question('Select  one from these two ? (decision/recommendation): ', (answer) => {
    if (answer === 'decision') {
        prompt_decisionmaker();
    } else if (answer === 'recommendation') {
        prompt_recommendation();
    } else {
        console.log('Invalid choice. Please choose "decision" or "recommendation".');
        rl.close();
    }
});