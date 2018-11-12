const Joi = require('joi'); // returns class// for validation
const express = require('express');// for routing
const app = express(); //call express functions  which returns an object;
const { WebhookClient } = require('dialogflow-fulfillment'); // for sending response back to dialgflow agent
const {Text, Card, Image, Suggestion, Payload} = require('dialogflow-fulfillment');
// const {Text, Card, Image, Suggestion, Payload} = require('dialogflow-fulfillment');
app.use(express.json());



// To handle get requests
app.get('/', (req, res) => {
  res.send("express and node");
});





// To handle all the post requests
app.post('/', (req,res) => {
  console.log("in post");
  const agent = new WebhookClient({request: req, response: res});
  let intentMap = new Map();
  console.log(agent.intent);
  agent.add("this is api response");
  intentMap.set('0.1FirstName', opportunityBuy);
  intentMap.set('0.0WelcomeInfo', welcomeInfo);
  intentMap.set('0.0WelcomeInfo - custom', welcomeInfoCustom);
  intentMap.set('1.0BuyingInfo', FirstStepsBuying);
  intentMap.set('1.2CreditInfo', CreditInfo);
  intentMap.set('1.3DownPaymentInfo', downPaymentInfo);
  intentMap.set('1.4ClosingCostInfo', closingCostInfo);
  intentMap.set('0.4EmailConfirmation', timeSpanSuggestions);
  intentMap.set('2.1FormQuestion', budgetSuggestion);
  agent.handleRequest(intentMap);
});




function opportunityBuy(agent){
  console.log("in function");


  agent.add("this is api response");
  agent.add(new Suggestion("Suggestion Test"));
  agent.add(new Card({title:"Bar Graph",imageUrl:"http://boilerplate.in/odu-images/Bar.png",text:"Yearly Data charted on a Bar Graph",buttonText:"Click to view graph",buttonUrl:"http://boilerplate.in/odu-images/Bar.png"}));

}
function welcomeInfo(agent){
  console.log("in welcomeInfo");
  agent.add("Hi!!");
  agent.add("Welcome to our Real Estate Chatbot 🏡");
  agent.add(new Card({title:"welcome",imageUrl:"https://s3.amazonaws.com/offermamabucket/welcomeHouseImage.jpg",text:"",buttonText:"",buttonUrl:""}));
  agent.add("Homes typically increase in value, build equity and provide built-in savings for the future (retirement). But real estate can be an overwhelming topic. Wouldn't it be great to have your real estate and financing questions answered right here? We think so!");
  agent.add(new Suggestion("Awesome! 😀"));
  agent.add(new Suggestion("Tell me more 😎"));
  // agent.add("You want to buy a home. That's great! Buying a home for the first time can seem overwhelming.");
  // agent.add(new Card({title:"welcome",imageUrl:"https://s3.amazonaws.com/offermamabucket/house1.jpg"}));
  // agent.add(new Suggestion("Let's explore what you can do to be ready. 👇"));
}
function welcomeInfoCustom(agent){
  console.log("in welcomeInfoCustom");
  // agent.add(new Card({title:"Buying Steps",imageUrl:"https://s3.amazonaws.com/offermamabucket/welcomeHouseImage.jpg",text:"custom",buttonText:"First Steps Buying",buttonUrl:"ll"}));agent.add(new Suggestion("First Time Buying"));
  // agent.add(new Card({title:"Finding Agent",imageUrl:"https://s3.amazonaws.com/offermamabucket/welcomeHouseImage.jpg",text:"custom",buttonText:"Finding an Agent",buttonUrl:"ll"}));agent.add(new Suggestion("finding an agent"));
agent.add(new Suggestion("First Time Buying"));
agent.add(new Suggestion("finding an agent"));
}
function FirstStepsBuying(agent){
  console.log("in FirstStepsBuying");
  agent.add("Let's explore, what you can do to be ready. 👇");
  agent.add(new Suggestion("👤Find and Agent"));
  agent.add(new Suggestion("🎯Credit Info"));
  agent.add(new Suggestion("💰Downpayment"));
  agent.add(new Suggestion("🤑Closing cost"));
}
function CreditInfo(agent){
  console.log("in CreditInfo");
  agent.add("Typically, a credit score of 620 or higher, is needed. There are some lenders who will approve buyers with a 580 credit score, sometimes lower. However, the higher your credit score the better your lending terms.");
  agent.add(new Card({title:"CreditInfo",imageUrl:"https://s3.amazonaws.com/offermamabucket/CreditReportImage.jpg",text:"",buttonText:"You can get a free credit report in the link below ",buttonUrl:"https://www.creditkarma.com/signup"}));
  agent.add("Step one to improving your credit score is checking your credit reports. Everyone has three credit reports, one from each of the 3 major credit bureaus: Experian, Equifax and TransUnion.");
  agent.add(new Suggestion("📌 Menu"));
}
function downPaymentInfo(agent){
  console.log("in CreditInfo");
  agent.add("The amount of a down payment can vary. There are programs and grants that allow for little or no money down. Most buyers put down between 5-25%. A lender can explain the various programs and find one that works for you.");
  agent.add(new Suggestion("📌 Menu"));
}
function closingCostInfo(agent){
  console.log("in closingCostInfo");
  agent.add("Closing costs include items such as taxes, title fees, lender fees, and hazard insurance. Sometimes what is included in closing costs varies. It can be impacted by the negotiation process on the sale price of the home, as the homeowners may or may not cover certain closing costs.");
  agent.add("Typical closing costs total 2-5% of the loan amount. 💵");
  agent.add("It's a good idea to have 2-6 months of living expenses saved up.");
  agent.add(new Suggestion("📌 Menu"));
}
function timeSpanSuggestions(agent){
  console.log("in closingCostInfo");
  agent.add("Please let us know the timeframe your are looking for");
  agent.add(new Suggestion("less than 30 days"));
  agent.add(new Suggestion("1-3 months"));
  agent.add(new Suggestion("3-6 months"));
  agent.add(new Suggestion("1 Year"));
}
function budgetSuggestion(agent){
  console.log("in closingCostInfo");
  agent.add("What is the budget you looking for");
  agent.add(new Suggestion("100k-200k"));
  agent.add(new Suggestion("200k-300k"));
  agent.add(new Suggestion("300k-400k"));
  agent.add(new Suggestion("400k-500k"));
  agent.add(new Suggestion("500k-600k"));
  agent.add(new Suggestion("Around 1 miillion"));
}
// Server Port
app.listen(3000, () => console.log("listening"));

//server.listen(3000, '10.67.24.254');
//app.listen(3000, '10.67.24.254', ()=> console.log("listening") );

// const port = process.env.PORT || 3000;
// app.listen(port, ()=> console.log(`Listening on port ${port}...`) );
