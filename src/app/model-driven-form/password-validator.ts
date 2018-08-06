import {FormControl} from '@angular/forms';

export function passwordValidator(control: FormControl): any {
  if(control.value && control.value.match(/^123/)) {
    return { weakPassword: true };
  }
}
