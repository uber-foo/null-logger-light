# null-logger

This library is intended to be used as a default null logger stand-in for javascript
components that can optionally accept a bunyan logger.

## Example

```javascript
import nullLogger from 'null-logger';

class Something {
	constructor(logger = nullLogger) {
		this.log = logger;
	}
	doSomething() {
		const { log } = this;
		log.info('nothing unless logger was supplied to constructor');
	}
}
```
