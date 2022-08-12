import { Component } from '@angular/core';

import { AngularD3TreeLibService } from 'angular-d3-tree';
const dataTreeSimple = {
  result: [
    { id: '1', description: 'root' },
    { id: '2', description: '2', parent: '1' },
    { id: '3', description: '3', parent: '2' },
    { id: '4', description: '4', parent: '2' },
    { id: '5', description: '5', parent: '2' },
    { id: '6', description: '6', parent: '2' },
    { id: '7', descripition: '7', parent: '2' },
    { id: '8', description: '8', parent: '2' },
    { id: '9', description: '9', parent: '2' },
  ],
};

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data: any[];
  constructor(private treeService: AngularD3TreeLibService) {
    this.data = dataTreeSimple.result;
  }
  selectedNode: any;
  nodeUpdated(node: any) {
    console.info('app detected node change');
  }
  nodeSelected(node: any) {
    console.info('app detected node selected', node);
    this.selectedNode = node;
  }
}
