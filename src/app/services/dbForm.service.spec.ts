import { TestBed } from '@angular/core/testing';


import { dbFormService } from './dbForm.service';

describe('dbFormService', () => {
    let service: dbFormService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(dbFormService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
