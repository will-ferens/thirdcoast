import React from "react"

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          {css}
          
        </head>
        <body {...this.props.bodyAttributes}>
        
          {this.props.preBodyComponents}
          
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script dangerouslySetInnerHTML={{
            __html: `
              const thirdcoast = { lat: 43.954738, lng: -86.258963 }
              function initMap(){
                console.log('poop')
                const map = new google.maps.Map(document.getElementById('map'), {
                  zoom: 14,
                  center: thirdcoast
                })
                const marker = new google.maps.Marker({
                  position: thirdcoast,
                  map: map,
                  label: {
                    text: 'Third Coast Family Practice'
                  }
                })
              }
            `
          }}></script>
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBe4QTMyO5awaSpRgBZx8el8iswZ4LmljI&callback=initMap" async defer></script>
        </body>
      </html>
    )
  }
}
