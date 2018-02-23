import { paint } from './canvas.js';
const { fromEvent } = Rx.Observable;
const { takeUntil, mergeMap } = Rx.operators;

const move$ = fromEvent(document, 'mousemove')
const down$ = fromEvent(document, 'mousedown')
const up$ = fromEvent(document, 'mouseup')

const paints$ = down$.pipe(
  mergeMap(down => move$.pipe(takeUntil(up$)))
);

paints$.subscribe(paint);
