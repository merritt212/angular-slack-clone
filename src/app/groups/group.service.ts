import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { Group } from './group.model';
import { RequestOptionsArgs, Headers } from '@angular/http';

@Injectable()
export class GroupService {
    constructor(private authHttp: AuthHttp) {
    }

    /**
     * Gets all the groups
     */
    getGroups(): Observable<Array<Group>> {
        return this.authHttp.get(`${environment.apiUrl}/groups`)
            .map(r => r.json());
    }
}
