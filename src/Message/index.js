"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Message = (function () {
    function Message(messageData) {
        this.id = messageData.id;
        this.message = messageData.message;
        this.senderName = messageData.senderName || undefined;
        this.timeStamp = messageData.timeStamp;
        this.status = messageData.status;
        this.price = messageData.price;
        this.timeToDisplay = messageData.timeToDisplay;
        this.ErrorMessage =messageData.ErrorMessage;
        this.imageUrl=messageData.imageUrl
        //one change
    }
    return Message;
}());
exports.default = Message;
//# sourceMappingURL=index.js.map