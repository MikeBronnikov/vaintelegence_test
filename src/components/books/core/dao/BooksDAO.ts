interface Book {
  title: string;
  date: Date;
  autor: string;
  description: string;
  image: string;
}
export interface BooksDAO {
  get(payload: any): Promise<Book[]>;
  add(book: any): Promise<void>;
  patch(book: any): Promise<any>;
}
