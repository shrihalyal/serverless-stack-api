import handler from "./libs/handler-lib";

export const main = handler(async (event, context) => {
    require('dotenv').config();

    console.log("##########################################");
    console.log(process.env.STRIPE_SECRET_KEY);
    console.log("##########################################");
    return { status: true };
});