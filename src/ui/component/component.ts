import { Component, OnInit } from '@angular/core';

import { Service } from './../service/service';

@Component({
  selector: 'component',
  templateUrl: 'templates/component/component.html'
})
export class ValuesComponent implements OnInit {

    private newValue: String = '';
    private values: String[] = [];

    private service: Service;

    constructor( service: Service ) {
        this.service = service;
    }

    ngOnInit() {
        this.values = this.service.getValues();
    }

    public addValue() {
        this.service.addValue( this.newValue );
    }

    public removeValue( value: String ) {
        console.log( this.service.getValues() );
        console.log( value );
        this.service.removeValue( value );
        console.log( this.service.getValues() );
    }

}
