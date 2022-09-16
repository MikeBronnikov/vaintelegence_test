import { myCache } from "../../../../..";
import { BooksDAO } from "../dao/BooksDAO";

interface BookService {
get: (params: any) => void;
add: (payload: any) => void;
patch: (payload: any) => void;
}

export class DefaultBookService implements BookService {
    private bookAccessor;
    constructor(bookAccessor: BooksDAO){
      this.bookAccessor = bookAccessor;
    }
    public async get(params: any){
        const cachedValue = myCache.get(JSON.stringify(params))
        if (cachedValue) {
            return cachedValue;
        }
       const result = await this.bookAccessor.get(params)
        myCache.set(JSON.stringify(params), result, 100);
        return result;
    }
    public add(payload: any){
        this.bookAccessor.add(payload)
    }
    public patch(payload: any){
        this.bookAccessor.patch(payload)
    }
}

