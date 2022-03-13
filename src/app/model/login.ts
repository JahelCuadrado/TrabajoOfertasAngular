export class Login {
  public username: string;
  public password: string;
  public rememberMe: boolean;

  constructor(username: string, password: string, rememberMe: boolean){
    this.username=username;
    this.password=password;
    this.rememberMe=rememberMe;
  }
}
