"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/ssi/v1/tx");
const tx_2 = require("./types/ssi/v1/tx");
const tx_3 = require("./types/ssi/v1/tx");
const tx_4 = require("./types/ssi/v1/tx");
const tx_5 = require("./types/ssi/v1/tx");
const tx_6 = require("./types/ssi/v1/tx");
const tx_7 = require("./types/ssi/v1/tx");
const msgTypes = [
    ["/hypersign.ssi.v1.MsgRegisterDID", tx_2.MsgRegisterDID],
    ["/hypersign.ssi.v1.MsgDeactivateDID", tx_1.MsgDeactivateDID],
    ["/hypersign.ssi.v1.MsgUpdateDID", tx_5.MsgUpdateDID],
    ["/hypersign.ssi.v1.MsgRegisterCredentialSchema", tx_3.MsgRegisterCredentialSchema],
    ["/hypersign.ssi.v1.MsgUpdateCredentialSchema", tx_6.MsgUpdateCredentialSchema],
    ["/hypersign.ssi.v1.MsgRegisterCredentialStatus", tx_4.MsgRegisterCredentialStatus],
    ["/hypersign.ssi.v1.MsgUpdateCredentialStatus", tx_7.MsgUpdateCredentialStatus],
];
exports.msgTypes = msgTypes;
