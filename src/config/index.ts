import dotenv from "dotenv";

const envFound = dotenv.config();

if (envFound.error) {
  throw new Error("no .env file found");
}

export default {
  dev: {
    port: parseInt(process.env.PORT as string, 10),
  },
};
