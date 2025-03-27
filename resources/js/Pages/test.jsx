import React, { useState, useEffect } from "react";

export default function Test() {
    const [csrfToken, setCsrfToken] = useState('');

    useEffect(() => {
        // Fetch the CSRF token from Laravel
        fetch('/csrf-token')
            .then(response => response.json())
            .then(data => setCsrfToken(data.token))
            .catch(error => console.error('Error fetching CSRF token:', error));
    }, []);

    return (
        <form action="/home" method="post">
            <input type="hidden" name="_token" value={csrfToken} />
            <button type="submit">Login</button>
        </form>
    );
}
