import express from 'express';
import playlistRouter from './api/PlaylistsAPI';

const app = express();

app.set('port', process.env.PORT || 4000);

app.use(express.json());
app.use('/playlist', playlistRouter);

app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}`);
});
