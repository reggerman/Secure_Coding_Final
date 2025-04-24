import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

import { Express } from "express";

const swaggerOptions: swaggerJsDoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Documentation",
            version: "1.0.0"
        },
    },

    apis: [
        "./src/app.ts",
        './src/api/v1/routes/*.ts'],
};


//init obj
const swaggerDocs = swaggerJsDoc(swaggerOptions);

// serve swagger 
const setSwagger = (app: Express): void => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
}

// export swagger as enpoint in our express app
export default setSwagger;