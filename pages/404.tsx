import { useEffect } from 'react';
export default function Custom404() {
    useEffect(() => {
        if (document) {
            const script = document.createElement('script');
            script.setAttribute('type', 'text/javascript');
            script.setAttribute(
                'src',
                '//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js'
            );
            script.setAttribute('charset', 'utf-8');
            script.setAttribute('homePageUrl', 'https://api.itxve.cn/');
            script.setAttribute('homePageName', '回到我的主页');
            document.querySelector('#N404')?.appendChild(script);
            window.history.replaceState({}, '找不到页面了', 'https://api.itxve.cn//404');
            return () => {
                document.querySelector('#N404')?.removeChild(script);
            };
        }
    }, []);
    return <div id="N404" />;
}
