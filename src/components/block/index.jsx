import {useRecoilValue} from "recoil";
import {authAtom} from "../../recoil/authAtom.js";
import {Navigate} from "react-router-dom";

export default function Block({children}){
    const auth = useRecoilValue(authAtom);
    if (auth.role !== '') {
        return <Navigate to="/" replace />;
    }
    return(
        <>{children}</>
    )
}