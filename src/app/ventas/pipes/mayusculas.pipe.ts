import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'mayusculas'
})
export class MayusculasPipe implements PipeTransform{

    transform(valor: string, enMayusculas: boolean ): string {

        // if ( enMayusculas ) {
        //     return valor.toLocaleUpperCase();
        // } else {
        //   return valor.toLowerCase();
        // }
        return ( enMayusculas )
            ? valor.toLocaleUpperCase()
            : valor.toLocaleLowerCase();

    }

}
