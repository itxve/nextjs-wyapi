import Typed from 'typed.js';
import { useEffect } from 'react';

export default function TypedAni(): JSX.Element {
    var options = {
        strings: ['一个简易demo'],
        typeSpeed: 40
    };

    useEffect(() => {
        var typed = new Typed('.element', options);
        return () => typed.destroy();
    }, []);

    return <p className="element"></p>;
}
