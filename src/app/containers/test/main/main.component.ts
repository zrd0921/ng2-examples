import {Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Store} from '@ngrx/store';

import 'style-loader!./main.scss';

@Component({
	selector: 'app-view-test-main',
	templateUrl: './main.html',
})
export class MainComponent {
	test$: Observable<any>;
	constructor(private store: Store<any>) {
		this.test$ = store.select('testMain');
		setTimeout(() => {
			store.dispatch({
				type: 'TEST_MAIN_INCREMENT'
			});
		}, 2000);
	}
}