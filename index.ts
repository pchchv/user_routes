import express from 'express';
import env from './src/helpers/env'
import userRoutes from './src/routes/userRoutes';

const app = express();

app.use(express.json());
app.use('/api', userRoutes);

app.listen(env.PORT, () => {
  console.log('Server is running on port 3000');
});