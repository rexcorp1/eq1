import {bfast, BFast} from 'bfastjs';
import {Component, AfterViewInit, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';



@Component({
    selector: 'app-settingssecurity',
    template: `<div class="body">  
   <div class="settingBody">
     <app-setting-sidebar></app-setting-sidebar>
     <div class="settingContent">
         <div class="generalSlide">
             <!-- <form>
             </form> -->
         </div>
           
        </div>
</div>`,
    styleUrls: ['../styles/settingssecurity.style.scss']
})
export class SettingssecurityComponent implements OnInit, OnDestroy, AfterViewInit {

    
    
    constructor(){
    }
    
    async ngOnInit(): Promise<any> {
        
    }

    async ngAfterViewInit(): Promise<any> {
        
    }

    async ngOnDestroy(): Promise<any> {
        
    }
}

