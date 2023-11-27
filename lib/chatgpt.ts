import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

// Create an instance of OpenAIAPI by passing the configuration
const openai = new OpenAIApi(configuration);

export default openai;
