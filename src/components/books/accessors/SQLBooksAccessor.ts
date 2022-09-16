import { DBconnection } from '../../../../index';
import { BooksDAO } from '../core/dao/BooksDAO';

export class SQLBooksAccessor implements BooksDAO {
  public async add(book: any): Promise<void> {
    return new Promise((resolve, reject) => {
      DBconnection.query('INSERT INTO books SET ?', book, (err, res) => {
        if (err) {
          console.log('error: ', err);
          reject(err);
          return;
        }
        resolve(res);
      });
    });
  }

    public get({page = 0, ...params}): Promise<any> {
      const getQueryWithFiltering = (params: any):string => {
        let conditions: string[] = [];
          for (const property in params) {
                conditions.push(`${property}='${params[property]}'`)
          }
            const joinedConditions = conditions.join(' AND ');
            return `SELECT * FROM books WHERE ${joinedConditions} LIMIT 10 OFFSET ${page * 10}`
        }
        const queryWithoutFiltering = `SELECT * FROM books LIMIT 10 OFFSET ${page * 10}`
        return new Promise<any>((resolve, reject) => {
        DBconnection.query(Object.keys(params).length === 0 
        ? queryWithoutFiltering
        : getQueryWithFiltering(params), (err, res) => {
          if (err) {
           console.log("error: ", err);
            reject(err)
            return; 
          }
        resolve(res)
      })
    })
  }

    public patch({id, ...newData}: any): Promise<any> {
      return new Promise<any>((resolve, reject) => {
         DBconnection.query(`UPDATE books SET ? WHERE id=${id}`, newData, (err, res) => {
          if (err) {
            console.log("error: ", err);
            reject(err)
            return; 
          }
        resolve(res)
       })
    })
  }
}