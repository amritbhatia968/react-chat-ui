"use strict";
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles_1 = require("./styles");
var defaultBubbleStyles = {
  userBubble: {},
  chatbubble: {},
  text: {},
};
var ChatBubble = (function (_super) {
  __extends(ChatBubble, _super);
  function ChatBubble(props) {
    return _super.call(this, props) || this;
  }
  ChatBubble.prototype.render = function () {
    var bubblesCentered = this.props.bubblesCentered;
    var bubbleStyles = this.props.bubbleStyles;
    bubbleStyles = bubbleStyles || defaultBubbleStyles;
    var userBubble = bubbleStyles.userBubble,
      chatbubble = bubbleStyles.chatbubble,
      text = bubbleStyles.text;
    var chatBubbleStyles =
      this.props.message.id === 0
        ? __assign(
          {},
          styles_1.default.chatbubble,
          bubblesCentered ? {} : styles_1.default.chatbubbleOrientationNormal,
          chatbubble,
          userBubble
        )
        : __assign(
          {},
          styles_1.default.chatbubble,
          styles_1.default.recipientChatbubble,
          bubblesCentered
            ? {}
            : styles_1.default.recipientChatbubbleOrientationNormal,
          userBubble,
          chatbubble
        );
        var isImageLoaded=true;
    var svgYakTail =
      this.props.message.id === 0
        ? // The right message
        React.createElement(
          "svg",
          {
            style: { position: "absolute", right: "-15px", top: "3px" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "21",
            height: "21",
            viewBox: "0 0 21 16",
          },
          React.createElement(
            "g",
            {},
            React.createElement(
              "g",
              {},
              React.createElement("path", {
                fill: "var(--primary, rgb(252, 191, 0))",
                d:
                  "M6.188 14.956c-2.136-.694-4.233-1.836-6.234-3.396L3.534.545c.796 1.533 2.153 3.8 4.105 5.894 2.212 2.373 4.704 4.02 7.405 4.899 1.618.525 3.33.777 5.087.746a.647.647 0 0 1 .668.567.575.575 0 0 1-.297.582c-1.276.736-3.326 1.719-5.845 2.218-2.864.567-5.713.4-8.47-.495z",
              })
            )
          )
        )
        : // The left message
        React.createElement(
          "svg",
          {
            style: {
              position: "absolute",
              left: "-15px",
              top: "3px",
              transform: "scaleX(-1)",
            },
            xmlns: "http://www.w3.org/2000/svg",
            width: "21",
            height: "21",
            viewBox: "0 0 21 16",
          },
          React.createElement(
            "g",
            {},
            React.createElement(
              "g",
              {},
              React.createElement("path", {
                fill: "rgb(242, 242, 242)",
                d:
                  "M6.188 14.956c-2.136-.694-4.233-1.836-6.234-3.396L3.534.545c.796 1.533 2.153 3.8 4.105 5.894 2.212 2.373 4.704 4.02 7.405 4.899 1.618.525 3.33.777 5.087.746a.647.647 0 0 1 .668.567.575.575 0 0 1-.297.582c-1.276.736-3.326 1.719-5.845 2.218-2.864.567-5.713.4-8.47-.495z",
              })
            )
          )
        );

    var svgGlobe = React.createElement(
      "svg",
      {
        style: {},
        xmlns: "http://www.w3.org/2000/svg",
        width: "17",
        height: "16",
        viewBox: "0 0 25 25",
      },
      React.createElement(
        "g",
        {},
        React.createElement(
          "g",
          {},
          React.createElement("path", {
            fill:
              this.props.message.id === 0
                ? "var(--onPrimary)"
                : "rgb(153, 153, 153)",
            d:
              "M17.814 11.317a25.334 25.334 0 0 0-.473-4.086c1.156-.326 2.19-.766 3.047-1.301 1.242 1.55 2 3.408 2.196 5.387zm-.981 8.134c.773.22 1.474.497 2.072.821a10.197 10.197 0 0 1-3.176 1.795c.422-.745.794-1.627 1.104-2.616zm-6.486.79a12.767 12.767 0 0 1-.463-1.211 17.956 17.956 0 0 1 4.923 0c-.14.429-.294.833-.461 1.21-.781 1.757-1.624 2.394-2 2.394-.376 0-1.22-.637-2-2.394zm-2.488-.79c.31.989.682 1.871 1.104 2.616a10.198 10.198 0 0 1-3.177-1.795 10.31 10.31 0 0 1 2.073-.82zm0-14.211a10.262 10.262 0 0 1-2.073-.82 10.211 10.211 0 0 1 3.177-1.795c-.422.745-.794 1.627-1.104 2.615zm7.895 8.135a23.556 23.556 0 0 1-.427 3.653 19.696 19.696 0 0 0-2.981-.224c-1.029 0-2.03.077-2.981.224a23.653 23.653 0 0 1-.428-3.653zm-6.817-2.058c.052-1.271.198-2.508.428-3.653.951.146 1.952.223 2.98.223 1.03 0 2.03-.077 2.982-.223.23 1.145.375 2.382.427 3.653zm6.792-8.692c1.15.4 2.224 1.004 3.176 1.794-.598.324-1.299.601-2.072.821-.31-.988-.682-1.87-1.104-2.615zm-1.383 1.827c.167.377.32.782.461 1.21-.788.11-1.615.168-2.461.168-.847 0-1.674-.058-2.462-.168.14-.428.295-.833.463-1.21.78-1.756 1.623-2.394 1.999-2.394.376 0 1.219.638 2 2.394zM4.303 5.93c.857.535 1.892.975 3.048 1.301a25.247 25.247 0 0 0-.473 4.086h-4.77c.196-1.979.953-3.838 2.195-5.387zm-2.195 7.445h4.77c.053 1.447.217 2.824.473 4.086-1.156.327-2.19.767-3.047 1.301-1.243-1.55-2-3.408-2.196-5.387zm18.28 5.387c-.857-.535-1.891-.974-3.047-1.301.256-1.262.42-2.639.473-4.086h4.77a10.187 10.187 0 0 1-2.196 5.387zM12.346 0C5.527 0 0 5.527 0 12.346 0 19.164 5.527 24.69 12.346 24.69c6.818 0 12.345-5.527 12.345-12.345C24.691 5.527 19.164 0 12.346 0z",
          })
        )
      )
    );

    var svgTick = React.createElement(
      "svg",
      {
        style: {},
        xmlns: "http://www.w3.org/2000/svg",
        width: "11",
        height: "8",
        viewBox: "0 0 11 8",
      },
      React.createElement(
        "g",
        {},
        React.createElement(
          "g",
          {},
          React.createElement("path", {
            fill:
              this.props.message.id === 0
                ? "var(--onPrimary)"
                : "rgb(153, 153, 153)",
            d:
              "M10.245.778L9.977.5a.507.507 0 0 0-.732 0L3.936 5.97 1.714 3.682a.506.506 0 0 0-.732 0l-.268.276a.544.544 0 0 0 0 .753l2.852 2.937a.508.508 0 0 0 .37.156.507.507 0 0 0 .37-.156l5.94-6.117a.544.544 0 0 0 0-.753z",
          })
        )
      )
    );

    let deliveredStatus;
    // delivered (30)
    if (this.props.message.status === 30)
      deliveredStatus = React.createElement(
        "span",
        { title: `Delivered (${this.props.message.price} USD)` },
        React.createElement(
          "span",
          { style: { position: "relative" } },
          svgTick
        ),
        React.createElement(
          "span",
          { style: { position: "absolute", right: "7px" } },
          svgTick
        )
      );
    // sent
    else if (this.props.message.status === 20)
      deliveredStatus = React.createElement(
        "span",
        {
          style: { position: "relative" },
          title: `Sent (${this.props.message.price} USD)`,
        },
        svgTick
      );
    // error
    else if (this.props.message.status === -1)
      deliveredStatus = React.createElement(
        "span",
        { style: { position: "relative", color: "var(--error)" }, title: this.props.message.ErrorMessage },
        React.createElement(
          "svg",
          {
            style: { zIndex: 999999 },
            xmlns: "http://www.w3.org/2000/svg",
            width: "17",
            height: "16",
            viewBox: "0 0 41.235 41.235",
          },
          React.createElement(
            "g",
            {
              id: "Group_1425",
              dataName: "Group 1425",
              transform: "translate(-182.671 -247.671)",
            },
            React.createElement(
              "g",
              {
                id: "Group_875",
                dataName: "Group 875",
                transform: "translate(-14 310.624)",
              },
              React.createElement(
                "g",
                {
                  id: "Group_874",
                  dataName: "Group 874",
                },
                React.createElement(
                  "g",
                  {
                    id: "Group_873",
                    dataName: "Group 873",
                  },
                  React.createElement("rect", {
                    id: "Rectangle_1737",
                    dataName: "Rectangle 1737",
                    width: "41.235",
                    height: "41.235",
                    transform: "translate(196.671 -62.953)",
                    fill: "none",
                  })
                )
              )
            ),

            React.createElement("path", {
              fill: "var(--error)",
              d:
                "M4048.231,1979.682h-32.224a4,4,0,0,1-3.35-6.186l16.112-24.682a4,4,0,0,1,6.7,0l16.112,24.682a4,4,0,0,1-3.35,6.186Zm-15.756-8.587a2.231,2.231,0,0,0-1.62.6,2.054,2.054,0,0,0-.619,1.524,2.029,2.029,0,0,0,.619,1.516,2.513,2.513,0,0,0,3.255,0,2.184,2.184,0,0,0,0-3.046A2.264,2.264,0,0,0,4032.475,1971.1ZM4030,1954.863l.473,14.034h3.671l.473-14.034Z",
              transform: "translate(-3829 -1695.682)",
            })
          )
        )
      );
    // queued (10 or nothing)
    else
      deliveredStatus = React.createElement(
        "span",
        {
          style: { position: "relative", color: "orange" },
          title: `Waiting Confirmation`,
        },
        React.createElement(
          "svg",
          {
            style: { zIndex: 999999, fill: "var(--surface)" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "17",
            height: "11",
            viewBox: "0 0 41.235 41.235"
          },
          React.createElement(
            "g",
            {
              id: "Icons_More", dataName: "Icons / More", transform: "translate(0 0)"
            },
            React.createElement(
              "g",
              {
                id: "Group_938",
                dataName: "Group 938",
                transform: "translate(-464.697 18.282)",
              },
              React.createElement(
                "g",
                {
                  id: "Group_937",
                  dataName: "Group 937",
                },
                React.createElement(
                  "g",
                  {
                    id: "Group_936",
                    dataName: "Group 936",
                  },
                  React.createElement("rect", {
                    id: "Rectangle_1758",
                    dataName: "Rectangle 1758",
                    width: "41.235",
                    height: "41.235",
                    transform: "translate(464.697 -18.282)",
                    fill: "none",
                  })
                )
              )
            ), React.createElement(
              "g",
              {
                id: "Group_1199", dataName: "Group 1199", transform: "translate(333.56 -455.336) rotate(90)"
              },
              React.createElement(
                "circle",
                {
                  id: "Ellipse_530",
                  dataName: "Ellipse 530",
                  cx: "3.436", cy: "3.436", r: "3.436", transform: "translate(472.689 299.386)",
                }),
              React.createElement(
                "circle",
                {
                  id: "Ellipse_531",
                  dataName: "Ellipse 531",
                  cx: "3.436", cy: "3.436", r: "3.436", transform: "translate(472.689 309.695)",
                }),
              React.createElement(
                "circle",
                {
                  id: "Ellipse_532",
                  dataName: "Ellipse 532",
                  cx: "3.436", cy: "3.436", r: "3.436", transform: "translate(472.689 320.004)",
                }),

            ),


          )
        )
      );

    return React.createElement( "div",{
        style: __assign( {
            marginTop: "5px",
            marginBottom: "5px",
            overflow: "auto",
            position: "relative",
          },
          this.props.message.id === 0
            ? { paddingRight: "15px" }
            : { paddingLeft: "15px" }
        ),
      },
      React.createElement(
        "div",
        { style: { ...chatBubbleStyles, position: "relative" } },
        svgYakTail,
        React.createElement(
          "p",
          {
            style: __assign({}, styles_1.default.p, text, {
              color: this.props.message.id === 0 ? "var(--onPrimary)" : "black",
              fontFamily: "roboto",
              fontSize: "16px",
              fontWeight: 400,
              letterSpacing: "0.5px",
              lineHeight: "24px",
              textAlign: "left",
              wordBreak:"break-word",
            }),
          },
          this.props.message.message
        ),
      
        this.props.message.imageUrl !== "" ? 
      
        React.createElement(
          "img",{
            onClick:()=>{
              this.props.onChatClick(this.props.message.imageUrl)
            },
            
            src:this.props.message.imageUrl,
            style: __assign({}, styles_1.default.p, text, {maxWidth:"100%",minHeight:"400px",maxHeight:"400px",minWidth:"200px"}),
          }
        ):
        null,
      
        this.props.message.id === 0
          ? React.createElement(
            "span",
            {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end"
              },
            },
            svgGlobe,
            React.createElement(
              "span",
              {
                style: {
                  fontSize: "12px",
                  width: "51px",
                  height: "16px",
                  fontFamily: "Roboto",
                  fontSize: "12px",
                  fontWeight: "400",
                  letterSpacing: "0.4px",
                  lineHeight: "16px",
                  color:this.props.message.id === 0? "var(--onPrimary)" : "rgb(153, 153, 153)",
                  marginLeft: "7px",
                  marginRight: "7px",
                },
              },
              this.props.message.timeToDisplay
            ),
            deliveredStatus
          )
          : React.createElement(
            "span",
            {
              style: {  display: "flex", alignItems: "center" },
            },
            React.createElement(
              "span",
              {
                style: {
                  fontSize: "12px",
                  width: "51px",
                  height: "16px",
                  fontFamily: "Roboto",
                  fontSize: "12px",
                  fontWeight: "400",
                  letterSpacing: "0.4px",
                  lineHeight: "16px",
                  color:this.props.message.id === 0? "var(--onPrimary)" : "rgb(153, 153, 153)",
                  marginRight: "7px",
                },
              },
              this.props.message.timeToDisplay
            ),
            svgGlobe
          )
      )
    );
  };
  return ChatBubble;
})(React.Component);
exports.default = ChatBubble;
//# sourceMappingURL=index.js.map
