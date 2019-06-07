import { Component, OnInit } from "@angular/core";
import { UserLogin } from "../models/UserLogin";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  users: UserLogin;

  constructor() {}

  ngOnInit() {}
}
