import {atom} from "recoil";

export const authAtom = atom({
    key: 'auth',
    default: {
        role:'',
        // ADMIN, USER, STUDENT, SUPERADMIN
        name:'',
    }
})