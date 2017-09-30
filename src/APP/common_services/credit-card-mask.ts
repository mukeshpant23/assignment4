import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'creditcardmask' })
export class CreditCardMaskPipe implements PipeTransform {
    transform(value: string, show: number): string {
        // console.log(show);
        value = value.toString();
        let len = value.length - show;
        let str = '';
        for (let i = 0; i < len; i++) {
            str = str + 'X';
        }
        str = str + "" + value.substring(value.length - 5, value.length);
        return str;
    }
}
