import app from "./app";

//import server stuff
import {Server} from "http";

// initialize port location 
const PORT: string | 3000 = process.env.PORT || 3000;

// initialize server listener for requests: => Port 3000 by default
const server: Server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// export server for testing
export default server;