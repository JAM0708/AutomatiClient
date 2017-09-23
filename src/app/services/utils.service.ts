import { Subject } from 'rxjs/Subject';

export class UtilsService {
    homeChanged = new Subject<boolean>();
    private homeState = false;
    setHomeState() {
        this.homeState = true;
        this.homeChanged.next(this.homeState);
    }
}