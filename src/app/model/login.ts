export class Login {
  public username: string;
  public paswword: string;
  public rememberMe: string;

  constructor(username: string, password: string, rememberMe: string){
    this.username=username;
    this.paswword=password;
    this.rememberMe=rememberMe;
  }
}
