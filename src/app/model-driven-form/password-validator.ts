import {FormControl} from '@angular/forms';

export function passwordValidator(control: FormControl): {[s: string]: boolean } {
  if(control.value.match(/^123/)) {
    return { weakPassword: true };
  } else {
    return { weakPassword: false };
  }
}
