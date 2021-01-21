import { User } from '../../models/User';

export interface IUserContext {
    users: User[],
    //toggle(): void;
}