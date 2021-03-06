import { useEffect } from 'react';
import { SnowScene } from './snow-scene';
import './global';
export default function Snow() {
    useEffect(() => {
        const ca = new SnowScene('body', { color: 'hsl(215deg 43% 56%)', volumn: 300 });
        ca.play();
    }, []);
    return <></>;
}
