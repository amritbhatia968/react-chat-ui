"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Message = (function () {
    function Message(messageData) {
        this.id = messageData.id;
        this.message = messageData.message;
        this.senderName = messageData.senderName || undefined;
        this.timeStamp = messageData.timeStamp;
        this.status = messageData.status;
    }
    return Message;
}());
exports.default = Message;
//# sourceMappingURL=index.js.map