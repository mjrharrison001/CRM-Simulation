import { Component } from '@angular/core';
//import {Router} from '@angular/router';
@Component({
  selector: 'home-page',
  template: `
              <h2>CRM Simulation Task</h2>
              <div class="row">
              <div class="col-md-12">
              <p>This application models the following simulation task:</p>
              <p>A CRM module exists with a "lead" module which represents the very first step of
              signing up a customer.  Based on various information (i.e. person's credit score),
              in that particular lead we may or may not sign up that person as a cusomter.</p>
              <p>Currently service reps. are creating those leads manually from the
              infromation they got from the phone call with the cusomter. We wish
              automize this process to remove human mustakes our of the equation.</p>
              <p>We will integrate this process with a 3rd party application called
              <a href="https://veriscanonline.com">VeriScan online.</a> This application
              will scan a driver's license of a customer and create an object
              in thier database with cusomer's info. This is thier API:
              <a href="https://github.com/IDScanNet/VSOnlineHistoryExportSample">VSOnlineHistoryExportSample</a></p>
              <p class="text-info">Task: Create a sheduled job that queries thier API every 15 seconds
              to check whether there are any new scans in thier database and push any new ones
              into the CRM back-end Lead Table.</p>
              Solution:
              <ul>
                <li>Create Daemon running on Node.JS back-end (on 15 second interval)</li>
                <li>Call VeriScan API and collect a list of all recently scanned IDs</li>
                <li>Call CRM database and return stored IDs</li>
                <li>If number of VeriScan IDs > CRM sort VeriScan IDs and add only the most recent</li>
                <li>Store onto CRM database</li>
                <li>Create this Angular 2 interface to track updates</li>
              </ul>
              <p>Note: Updates will only occur if scans are made under - <br>
              Login: mjrharrison001@gmail.com<br>
              Password: 5e1443c1<br><i>(30 day trial)</i></p>
              <p><a href="https://crm-simulation.herokuapp.com/users">Node.JS URL</a></p>
              <p><a href="https://crm-simulation.herokuapp.com/users">Node.JS GitHub</a></p>
              <p><a routerLink="users">See Scanned Driver's Licences</a></p>
              <p> - Michael Harrison</p>
              </div>
              </div>
            `
})
export class HomeComponent {
}
