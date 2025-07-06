import express from 'express';
import playlistRouter from './api/PlaylistsAPI';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: 'http://localhost:3000', // frontend port
  methods: ['GET', 'POST'],
}));

app.set('port', process.env.PORT || 4000);

app.use(express.json());
app.use('/playlist', playlistRouter);

app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}`);
});
