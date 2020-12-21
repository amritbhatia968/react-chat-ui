"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var BubbleGroup_1 = require("../BubbleGroup");
var ChatBubble_1 = require("../ChatBubble");
var ChatInput_1 = require("../ChatInput");
var Message_1 = require("../Message");
var styles_1 = require("./styles");
var ChatFeed = (function (_super) {
    __extends(ChatFeed, _super);
    function ChatFeed(props) {
        return _super.call(this, props) || this;
    }
    ChatFeed.prototype.componentDidMount = function () {
        this.scrollToBottom();
    };
    ChatFeed.prototype.componentDidUpdate = function () {
        this.scrollToBottom();
    };
    ChatFeed.prototype.scrollToBottom = function () {
        var scrollHeight = this.chat.scrollHeight;
        var height = this.chat.clientHeight;
        var maxScrollTop = scrollHeight - height;
        this.chat.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    };
    ChatFeed.prototype.renderMessages = function (messages) {
        var _a = this.props, isTyping = _a.isTyping, bubbleStyles = _a.bubbleStyles, chatBubble = _a.chatBubble, showSenderName = _a.showSenderName;
        var ChatBubble = chatBubble || ChatBubble_1.default;
        var group = [];
        var currentDate = "";
        const monthMap = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

        var moment = require('moment');
        var REFERENCE = moment(new Date()); 
        var TODAY = REFERENCE.clone().startOf('day');
        var YESTERDAY = REFERENCE.clone().subtract(1, 'days').startOf('day');
        var A_WEEK_OLD = REFERENCE.clone().subtract(6, 'days').startOf('day');
        function isToday(momentDate) {
            return moment(momentDate).isSame(TODAY, 'd');
        }
        function isYesterday(momentDate) {
            return moment(momentDate).isSame(YESTERDAY, 'd');
        }
        function isWithinAWeek(momentDate) {
            return moment(momentDate).isAfter(A_WEEK_OLD);
        }
        var messageNodes = messages.map(function (message, index) {
            const d = new Date(message.timeStamp);
            if (currentDate == d.toDateString()) {
                // group the messages according to the date they were sent/received
                if (index == messages.length - 1) {
                    // this is the last message..
                    group.push(message);
                    let toShowInGroup = "";
                    if (isToday(d)) {
                        toShowInGroup =  group[0].timeToDisplay;
                    } else if (isYesterday(d)) {
                        toShowInGroup = "Yesterday, " + group[0].timeToDisplay
                    } else if (isWithinAWeek(d)) {
                        toShowInGroup = `${d.toDateString().substr(0, 3)}, ${group[0].timeToDisplay}`
                    } else {
                        toShowInGroup = d.getDate() + " " + monthMap[d.getMonth()] + " " + d.getFullYear() + ", " + group[0].timeToDisplay;
                    }
                    return (React.createElement(BubbleGroup_1.default, { key: index, messages: group, id: message.id, showSenderName: showSenderName, chatBubble: ChatBubble, bubbleStyles: bubbleStyles, when: toShowInGroup }))
                } else if (currentDate == new Date(messages[index + 1].timeStamp).toDateString()) {
                    // this is a middle message and will be pushed to the current group of messages
                    group.push(message);
                    return null;
                } else {
                    // This is the last message in a a single day..
                    let toShowInGroup = "";
                    if (isToday(d)) {
                        toShowInGroup = group[0].timeToDisplay;
                    } else if (isYesterday(d)) {
                        toShowInGroup = "Yesterday, " + group[0].timeToDisplay
                    } else if (isWithinAWeek(d)) {
                        toShowInGroup = `${d.toDateString().substr(0, 3)}, ${group[0].timeToDisplay}`
                    } else {
                        toShowInGroup = d.getDate() + " " + monthMap[d.getMonth()] + " " + d.getFullYear() + ", " + group[0].timeToDisplay;
                    }
                    return (React.createElement(BubbleGroup_1.default, { key: index, messages: group, id: message.id, showSenderName: showSenderName, chatBubble: ChatBubble, bubbleStyles: bubbleStyles, when: toShowInGroup }))
                }
            } else {
                group = [];
                currentDate = d.toDateString();
                group.push(message);
                if (index == messages.length - 1 || currentDate != new Date(messages[index + 1].timeStamp).toDateString()) {
                    const messageGroup = JSON.parse(JSON.stringify(group))
                    group = [];
                    const today = new Date()
                    const yesterday = new Date(new Date() - 86400000)
                    let toShowInGroup = "";
                    if (isToday(d)) {
                        toShowInGroup = message.timeToDisplay;
                    } else if (isYesterday(d)) {
                        toShowInGroup = `Yesterday, ${message.timeToDisplay}`
                    } else if (isWithinAWeek(d)) {
                        toShowInGroup = `${d.toDateString().substr(0, 3)}, ${message.timeToDisplay}`
                    } else {
                        toShowInGroup = d.getDate() + " " + monthMap[d.getMonth()] + " " + d.getFullYear() + ", " + message.timeToDisplay;
                    }
                    return (React.createElement(BubbleGroup_1.default, { key: index, messages: messageGroup, id: message.id, showSenderName: showSenderName, chatBubble: ChatBubble, bubbleStyles: bubbleStyles, when: toShowInGroup }))
                } else return null;
            }
        });
        if (isTyping) {
            messageNodes.push(React.createElement("div", { key: "isTyping", style: __assign({}, styles_1.default.chatbubbleWrapper) },
                React.createElement(ChatBubble, { message: new Message_1.default({ id: 1, message: '...', senderName: '' }), bubbleStyles: bubbleStyles })));
        }
        return messageNodes;
    };
    ChatFeed.prototype.render = function () {
        var _this = this;
        var inputField = this.props.hasInputField && React.createElement(ChatInput_1.default, null);
        var maxHeight = this.props.maxHeight;
        return (React.createElement("div", { id: "chat-panel", style: styles_1.default.chatPanel },
            React.createElement("div", { ref: function (c) {
                    _this.chat = c;
                }, className: "chat-history", style: __assign({}, styles_1.default.chatHistory, { maxHeight: maxHeight }) },
                React.createElement("div", { className: "chat-messages" }, this.renderMessages(this.props.messages))),
            inputField));
    };
    return ChatFeed;
}(React.Component));
exports.default = ChatFeed;
//# sourceMappingURL=index.js.map