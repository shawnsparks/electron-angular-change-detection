import { ChangeDetectorRef, Component } from '@angular/core';

const { remote, ipcRenderer } = require( 'electron' );
import * as fs from 'fs';

import { Service } from './../service/service';


@Component({
    selector: 'my-app',
    templateUrl: 'templates/app/app.component.html'
})
export class AppComponent {

    private changeDetector: ChangeDetectorRef;
    private service: Service;

    constructor( service: Service, changeDetector: ChangeDetectorRef ) {
        this.service = service;
        this.changeDetector = changeDetector;
        ipcRenderer.on( 'load', (event) => { this.load( event ); } );
        ipcRenderer.on( 'save', (event) => { this.save( event ); } );
    }

    public doNothing(): void {}

    private load( event: any ): void {
        remote.dialog.showOpenDialog(
            {
                filters: [ { name: 'json', extensions: ['json'] } ],
                properties: [ 'openFile' ]
            },
            ( files ) => {
                if( files !== undefined && files.length === 1 ) {
                    fs.readFile(
                        files[0],
                        'utf8',
                        ( error, fileData ) => {
                            if( error ) {
                                console.error( error );
                            }
                            else {
                                let data = JSON.parse( fileData );
                                console.log( data );
                                data.values.forEach(
                                    ( value ) => {
                                        this.service.addValue( value );
                                    }
                                );
                                this.changeDetector.detectChanges();
                            }
                        }
                    );
                }
            }
        );
    }

    private save( event: any ): void {
        const data: any = { values: this.service.getValues() };
        remote.dialog.showSaveDialog(
            { filters: [ { name: 'json', extensions: ['json'] } ] },
            function( fileName ) {
                fs.writeFile(
                    fileName,
                    JSON.stringify( data ),
                    function( error ) {
                        if( error ) {
                            console.error( error );
                        }
                        else {
                            console.log( `Data saved to ${fileName}` );
                        }
                    }
                );
            }
        );
    }

}
