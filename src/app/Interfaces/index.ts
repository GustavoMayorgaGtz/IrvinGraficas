import { AbstractControl, FormGroup } from "@angular/forms";

export interface login{
    username: string;
    password: string;
} 

export interface loginForm extends FormGroup{
    value: login,
    controls: {
        username: AbstractControl<any>,
        password: AbstractControl<any>,
    }
}