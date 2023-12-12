import  { useEffect } from 'react';
function TestBot() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script.async = true;
    script.onload = () => {
        window.botpressWebChat.init({
            "composerPlaceholder": "Chat with bot",
            "botConversationDescription": "This chatbot was built surprisingly fast with Botpress",
            "botId": "bab58f08-c3ad-4723-8666-f6fc6672259a",
            "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
            "messagingUrl": "https://messaging.botpress.cloud",
            "clientId": "bab58f08-c3ad-4723-8666-f6fc6672259a",
            "webhookId": "a6ca5485-11d1-4859-a708-81d6985c2ea2",
            "lazySocket": true,
            "themeName": "prism",
            "frontendVersion": "v1",
            "showPoweredBy": true,
            "theme": "prism",
            "themeColor": "#2563eb"
        });
                window.botpressWebChat.onEvent(() => {
                window.botpressWebChat.sendEvent({ type: 'show' });
            }, ['LIFECYCLE.LOADED']);
           
    }
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);


}

export default TestBot;