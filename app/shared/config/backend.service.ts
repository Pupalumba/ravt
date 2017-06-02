import { getString, setString } from "application-settings";
import { Observable } from "rxjs/Rx";

export class BackendService {
    static apiUrl = "https://retroaudio.herokuapp.com/";

    static isLoggedIn(): boolean {
        return !!getString("token");
    }

    static get token(): string {
        return getString("token");
    }

    static set token(theToken: string) {
        setString("token", theToken);
    }
}