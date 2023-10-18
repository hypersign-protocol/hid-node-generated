import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgDeactivateDID } from "./types/ssi/v1/tx";
import { MsgRegisterDID } from "./types/ssi/v1/tx";
import { MsgRegisterCredentialSchema } from "./types/ssi/v1/tx";
import { MsgRegisterCredentialStatus } from "./types/ssi/v1/tx";
import { MsgUpdateDID } from "./types/ssi/v1/tx";
import { MsgUpdateCredentialSchema } from "./types/ssi/v1/tx";
import { MsgUpdateCredentialStatus } from "./types/ssi/v1/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/hypersign.ssi.v1.MsgRegisterDID", MsgRegisterDID],
    ["/hypersign.ssi.v1.MsgDeactivateDID", MsgDeactivateDID],
    ["/hypersign.ssi.v1.MsgUpdateDID", MsgUpdateDID],
    ["/hypersign.ssi.v1.MsgRegisterCredentialSchema", MsgRegisterCredentialSchema],
    ["/hypersign.ssi.v1.MsgUpdateCredentialSchema", MsgUpdateCredentialSchema],
    ["/hypersign.ssi.v1.MsgRegisterCredentialStatus", MsgRegisterCredentialStatus],
    ["/hypersign.ssi.v1.MsgUpdateCredentialStatus", MsgUpdateCredentialStatus],
    
];

export { msgTypes }