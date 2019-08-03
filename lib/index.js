"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var os_1 = require("os");
var nets = os_1.networkInterfaces();
var local;
function getLocalAddress() {
    for (var i in nets) {
        var net = nets[i];
        var len = net.length;
        for (var i_1 = 0; i_1 < len; i_1++) {
            var n = net[i_1];
            if (n.address !== '127.0.0.1' && n.family === 'IPv4' && !n.internal) {
                local = n;
            }
        }
    }
}
getLocalAddress();
/**
 * ip
 */
var ip = function () { return local.address; };
exports.localAddr = local;
exports.default = ip;
//# sourceMappingURL=index.js.map