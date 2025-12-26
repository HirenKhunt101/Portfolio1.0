import { trigger, transition, style, query, animate } from '@angular/animations';

export const routeTransition = trigger('routeTransition', [
    transition('* => *', [
        query(':enter', [
            style({ opacity: 0, position: 'absolute', width: '100%' })
        ], { optional: true }),

        query(':leave', [
            style({ opacity: 1, position: 'absolute', width: '100%' }),
            animate('0.3s ease-out', style({ opacity: 0 }))
        ], { optional: true }),

        query(':enter', [
            style({ opacity: 0 }),
            animate('0.4s ease-in', style({ opacity: 1 }))
        ], { optional: true })
    ])
]);
