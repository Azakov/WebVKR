import { Injectable } from "@angular/core";
import { HttpService } from "../../http/http.service";
import { CacheListName } from "../../http/cashe-name";
import { RequestPathList } from "../../http/routing-path-list";

@Injectable()
export class AuthenticationBaseService {
  private _userId: string = "";
  private _role: number = -1;
  private _userName: string = "";

  constructor(private httpService: HttpService) {}

  public getIsAuthenticated() {
    return {
      userId: this._userId,
      role: this._role,
      name: this._userName,
    };
  }

  public getNewLocalUserData() {
    return this.httpService.getRequest(
      RequestPathList.openUser + `?userId=${this._userId}`,
      CacheListName.userProfile
    );
  }

  public checkAuthentication() {
    const localData = localStorage.getItem(CacheListName.userProfile);
    if (localData) {
      this._userId = localData.split(",")[0];
      this._role = +localData.split(",")[1];
      this._userName = localData.split(",")[2];
    }
  }

  public logIn(loginData) {
    this._userId = loginData.userId;
    this._role = loginData.role;
    this._userName = loginData.fio;
    localStorage.setItem(
      CacheListName.userProfile,
      `${loginData.userId},${loginData.role},${loginData.fio}`
    );
    this.httpService.goToUrl("/profile");
  }

  public logOut() {
    localStorage.removeItem(CacheListName.userProfile);
    this.httpService.clearCache();
    this._userId = null;
    this._role = -1;
    this._userName = null;
    this.httpService.goToUrl("/login");
  }
}
