import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name:'convertToSpaces'
})
export class ConvertToSpapcesPipe implements PipeTransform{
    transform(value:string,character:string):string{
        return value.replace(character,' ');
    }
}