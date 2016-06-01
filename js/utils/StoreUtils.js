import { each, isFunction } from 'underscore';
import { EventEmitter } from 'events';
import 'core-js';

const CHANGE_EVENT = 'change';

/*
	Reusable function for stores to emit changes and listening to components
 */
export function createStore(spec) {
	const emitter = new EventEmitter();
	emitter.setMaxListeners(0);

	/*
		Here we merge common store methods, and methods that 
		are specific to store
	 */
	const store = Object.assign({
		emitChange() {
			emitter.emit(CHANGE_EVENT);
		},

		addChangeListener(callback) {
			emitter.on(CHANGE_EVENT, callback);
		},

		removeChangeListener(callback) {
			emitter.removeListener(CHANGE_EVENT, callback);
		}
	}, spec);

	
	// Auto-bind store methods for convenience
	each(store, (val, key) => {
		if (isFunction(val)) {
			store[key] = store[key].bind(store);
		}
	});

	return store;
}
