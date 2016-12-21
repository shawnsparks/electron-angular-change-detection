import { Injectable } from '@angular/core';

@Injectable()
export class Service {

    private values: String[] = [];

    public addValue( value: String ): void {
        this.values.push( value );
    }

    public getValues(): String[] {
        return this.values;
    }

    public removeValue( value: String ): void {
        const index: number = this.values.indexOf( value );
        if( index > -1 ) {
            this.values.splice( index, 1 );
        }
    }

}
