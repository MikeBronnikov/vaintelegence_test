import { mySQLLoader } from './loaders/mySQLLoader';
import randomstring from 'randomstring';

export const firstInitializationScript = () => {
  const DBconnection = mySQLLoader();
  const sql =
    'CREATE TABLE books (id int NOT NULL AUTO_INCREMENT, title VARCHAR(255), date INT, autor VARCHAR(255), description VARCHAR(255), image VARCHAR(255), PRIMARY KEY (id) )';
  DBconnection.query(sql);

  for (let index = 1; index < 100000; index++) {
    const randStr = randomstring.generate(7);
    const sql = `INSERT INTO books (id, title, date, autor, description, image) VALUES ('${index}', '${randStr}', '2002', '${randStr}', '${randStr}', 'img_url_to_minio')`;
    DBconnection.query(sql);
  }
  console.log('script  completed');
};

firstInitializationScript();
