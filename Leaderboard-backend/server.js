import { app } from "./index.js";

const port  = 5000

app.listen(port , () => {
    console.log(`backend is running at port: ${port}`);
}) 