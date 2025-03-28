import React, { useEffect } from "react";

const CsrfToken = ({ onTokenFetched }) => {
    useEffect(() => {
        fetch("/csrf-token")
            .then((response) => response.json())
            .then((data) => {
                if (onTokenFetched) {
                    onTokenFetched(data.token);
                }
            })
            .catch((error) =>
                console.error("Error fetching CSRF token:", error)
            );
    }, [onTokenFetched]);

    return null; // Doesn't render anything, just fetches the token
};

export default CsrfToken;
