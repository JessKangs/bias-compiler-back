import app, { init } from "./app"

const port = process.env.PORT || 4001 ;

init().then(() => {
    app.listen(port, () => {
        console.log(`Magic happens in ${port}`);
    });
});