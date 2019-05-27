import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { CredencialesDTO } from '../models/credenciales.dto';

@Injectable()
export class AutenticationService {

    apiUrl = 'http://localhost:8081';

    constructor(public http: HttpClient) {
    }

    loginIn(creds : CredencialesDTO) : Observable<boolean>  {
        return this.http.post<boolean>(this.apiUrl+'/movil/loginMovil',creds);
    }

}
