import { useEffect } from 'react';

const generateRandomCookie = () => {
    const randomValue = Math.random().toString(36).substring(2, 15);
    document.cookie = `randomCookie=${randomValue}; path=/`;
};

const RandomCookieGenerator = () => {
    useEffect(() => {
        generateRandomCookie();
    }, []);

    return (
        <div>
            <h1>Random Cookie Generator Test</h1>
            <p>A new random cookie is set on each request.</p>
        </div>
    );
};

export default RandomCookieGenerator;
