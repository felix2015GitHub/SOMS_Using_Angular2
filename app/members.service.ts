import { Member } from './members';
import { MEMBERS } from './mock-members';
import { Injectable } from '@angular/core';

@Injectable()
export class MembersService {
    getMembers() {
        return Promise.resolve(MEMBERS);
    }
}