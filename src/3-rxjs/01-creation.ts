import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/from';

describe('Creation', () => {
  const __ = 'replace me so that the test is passing';
  it('should understand Observable.from', function () {
    let result = 0;
    Observable.from([1, 2, 3])
      .subscribe(x => result += x);
    expect(result).toBe(__);
  });
  it('should understand Observable.range', function () {
    let result = 0;
    Observable.range(1, 10)
      .subscribe(x => result += x);
    expect(result).toBe(__);
  });
  it('should understand Subject', function () {
    let subject = new Subject<number>(), result = 0;
    subject.subscribe(x => result += x);

    subject.next(1);
    subject.next(2);
    subject.next(3);

    expect(result).toBe(__);
  });
  it('should understand Subject 2', function () {
    let subject = new Subject<number>(), result = 0;
    subject.next(1);
    subject.next(2);
    subject.next(3);

    subject.subscribe(x => result += x);

    expect(result).toBe(__);
  });
  it('should understand BehaviorSubject', function () {
    let subject = new BehaviorSubject<number>(0), result = 0;
    subject.next(1);
    subject.next(2);
    subject.next(3);

    subject.subscribe(x => result += x);

    expect(result).toBe(__);
  });
  it('should understand ReplaySubject', function () {
    let subject = new ReplaySubject<number>(), result = 0;
    subject.next(1);
    subject.next(2);
    subject.next(3);

    subject.subscribe(x => result += x);

    expect(result).toBe(__);
  });
});
