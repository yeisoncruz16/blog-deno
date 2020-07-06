import app from './api/server.ts';
import home from './routes/home.ts';
import posts from './routes/posts.ts';

app.use(home.routes()).use(posts.routes()); 

console.log("Server listen at 127.0.0.1:4000");

app.listen({port : 4000});