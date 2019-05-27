import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ListAuditDTO } from "../models/listAudits.dto";
import { Observable } from "rxjs/Rx";

@Injectable()
export class ListAuditsService {

    apiUrl = 'http://localhost:8081';

    constructor(public http: HttpClient) {
    }

    findAll() : Observable<ListAuditDTO[]>  {
        return this.http.get<ListAuditDTO[]>(this.apiUrl+'/movil/listAuditsMovil');
    }
}
