
import "./AboveFooter.css";
function AboveFooter(){
    return (
      <div className="main-main">
        <div className="main-sec">
          <div>
            <img
              src="https://statics.olx.in/external/base/img/phone-app.webp"
              alt=""
            />
          </div>
          <div className="middle-div">
            <p className="try-the-olx-app">TRY THE OLX APP</p>
            <p className="buy-sell">
              Buy, sell and find just about anything using the app on your
              mobile.
            </p>
          </div>
          <div>
            <p className="get-your-app">GET YOUR APP TODAY</p>
            <div className="google-icon">
              <a href="https://apps.apple.com/in/app/olx-buy-sell-near-you/id913492792?utm_source=desktop_ios&utm_medium=home_banner&utm_campaign=home">
                <img
                  src="https://statics.olx.in/external/base/img/appstore_2x.webp"
                  alt=""
                />
              </a>

              <a href="https://play.google.com/store/apps/details?id=com.olx.southasia&hl=en_IN&utm_source=desktop_android&utm_medium=home_banner&utm_campaign=home">
                <img
                  src="https://statics.olx.in/external/base/img/playstore_2x.webp"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}
export default AboveFooter;