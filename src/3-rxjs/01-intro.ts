import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/range';

describe('RxJS!', () => {
  const __ = 'replace me so that the test is passing';
  it('should work', () => {
    let result = '';
    Observable.range(1, 10)
      .subscribe(x => result += x);
    expect(result).toBe(__);
  });
});
