export default function Weather() {
    const html = `
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>天气</title>
    <style>
      body{
        height:200px !important;
      }
      html{
        height:200px !important;
      }
      .wv-top-backdrop[data-v-bfc01bdc]{
        width: 170px !important;
      }
      .wv-top-col-3-c{
        width: 150px !important;
        margin-top: 3px !important;
      }
      button.wv-top-button[data-v-bfc01bdc]{
        width: 135px !important;
        height: 32px !important;
        border: none !important;
        margin-top: 10px !important;
        cursor: pointer;
      }
      #weather-v2-plugin-standard{
        width:100% !important;
        height:200px !important;
      }
      .wv-v-h-location{
        padding:1.5em 0.7em 2.3em !important;
      }
    </style>
  </head>
  
  <body>
    <div id="weather-v2-plugin-standard"></div>
    <script>
    WIDGET = {
      CONFIG: {
        "layout": 1,
        "background": 1,
        "dataColor": "FFFFFF",
        "borderRadius": 5,
        "key": "3lV5B9kLkw"
      }
    }
    </script>
    <script src="https://apip.weatherdt.com/standard/static/js/weather-standard-common.js?v=2.0"></script>
    </body>
    `;
    return (
        <div className="weather">
            <iframe
                title="Weather"
                srcDoc={html}
                style={{
                    width: '100%',
                    height: '100%',
                    border: '0px'
                }}
            />
            <style jsx>
                {`
                    .weather {
                        height: 220px;
                        right: -1px;
                        top: 64px;
                    }
                `}
            </style>
        </div>
    );
}
