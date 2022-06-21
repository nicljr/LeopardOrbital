import { useEffect } from "react";

function RedirectPage(props) {
    const { site } = props;
    useEffect(() => {
        window.location.replace(site);
    }, [])

    return ( <
        div >
        <
        h3 > Redirecting... < /h3>  < /
        div > );
}

export default RedirectPage;