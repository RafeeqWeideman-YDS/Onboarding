import { EncodeObject, TsProtoGeneratedType } from "@cosmjs/proto-signing";
import { Writer, Reader } from "protobufjs";

export class MsgStoreUserData implements TsProtoGeneratedType {
    static encode(arg0: MsgStoreUserData) {
        throw new Error('Method not implemented.');
    }
    public firstName: string;
    public lastName: string;
    public dob: string;
    public gender: string;
    public household: number;
    public status: string;
    public monthlyIncome: number;
    public monthlySavings: number;
    public monthlyCharcoal: number;
    public monthlyCharcoalExpense: number;
    public stoveUsage: string;
    public village: string;
    public profilePicture: string;
    public latitude: string;
    public longitude: string;
    public phoneNumber: string;
    public verbalLanguage: string;
    public capturedPolicy: string;

    constructor(data: {
        firstName: string;
        lastName: string;
        dob: string;
        gender: string;
        household: number;
        status: string;
        monthlyIncome: number;
        monthlySavings: number;
        monthlyCharcoal: number;
        monthlyCharcoalExpense: number;
        stoveUsage: string;
        village: string;
        profilePicture: string;
        latitude: string;
        longitude: string;
        phoneNumber: string;
        verbalLanguage: string;
        capturedPolicy: string;
    }) {
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.dob = data.dob;
        this.gender = data.gender;
        this.household = data.household;
        this.status = data.status;
        this.monthlyIncome = data.monthlyIncome;
        this.monthlySavings = data.monthlySavings;
        this.monthlyCharcoal = data.monthlyCharcoal;
        this.monthlyCharcoalExpense = data.monthlyCharcoalExpense;
        this.stoveUsage = data.stoveUsage;
        this.village = data.village;
        this.profilePicture = data.profilePicture;
        this.latitude = data.latitude;
        this.longitude = data.longitude;
        this.phoneNumber = data.phoneNumber;
        this.verbalLanguage = data.verbalLanguage;
        this.capturedPolicy = data.capturedPolicy;
    }

    encode(message: MsgStoreUserData, writer?: Writer): Writer {
        const {
            firstName,
            lastName,
            dob,
            gender,
            household,
            status,
            monthlyIncome,
            monthlySavings,
            monthlyCharcoal,
            monthlyCharcoalExpense,
            stoveUsage,
            village,
            profilePicture,
            latitude,
            longitude,
            phoneNumber,
            verbalLanguage,
            capturedPolicy,
        } = message;

        writer = writer || Writer.create();
        writer.uint32(10).string(firstName);
        writer.uint32(18).string(lastName);
        writer.uint32(26).string(dob);
        writer.uint32(34).string(gender);
        writer.uint32(40).int32(household);
        writer.uint32(50).string(status);
        writer.uint32(56).int32(monthlyIncome);
        writer.uint32(64).int32(monthlySavings);
        writer.uint32(72).int32(monthlyCharcoal);
        writer.uint32(80).int32(monthlyCharcoalExpense);
        writer.uint32(90).string(stoveUsage);
        writer.uint32(98).string(village);
        writer.uint32(106).string(profilePicture);
        writer.uint32(114).string(latitude);
        writer.uint32(122).string(longitude);
        writer.uint32(130).string(phoneNumber);
        writer.uint32(138).string(verbalLanguage);
        writer.uint32(146).string(capturedPolicy);

        return writer;
    }

    decode(input: Uint8Array | Reader, length?: number): any {
        const reader = input instanceof Uint8Array ? Reader.create(input) : input;
        const decodedMessage: any = {};
        while (reader.pos < length!) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    decodedMessage.firstName = reader.string();
                    break;
                case 2:
                    decodedMessage.lastName = reader.string();
                    break;
                case 3:
                    decodedMessage.dob = reader.string();
                    break;
                case 4:
                    decodedMessage.gender = reader.string();
                    break;
                case 5:
                    decodedMessage.household = reader.int32();
                    break;
                case 6:
                    decodedMessage.status = reader.string();
                    break;
                case 7:
                    decodedMessage.monthlyIncome = reader.int32();
                    break;
                case 8:
                    decodedMessage.monthlySavings = reader.int32();
                    break;
                case 9:
                    decodedMessage.monthlyCharcoal = reader.int32();
                    break;
                case 10:
                    decodedMessage.monthlyCharcoalExpense = reader.int32();
                    break;
                case 11:
                    decodedMessage.stoveUsage = reader.string();
                    break;
                case 12:
                    decodedMessage.village = reader.string();
                    break;
                case 13:
                    decodedMessage.profilePicture = reader.string();
                    break;
                case 14:
                    decodedMessage.latitude = reader.string();
                    break;
                case 15:
                    decodedMessage.longitude = reader.string();
                    break;
                case 16:
                    decodedMessage.phoneNumber = reader.string();
                    break;
                case 17:
                    decodedMessage.verbalLanguage = reader.string();
                    break;
                case 18:
                    decodedMessage.capturedPolicy = reader.string();
                    break;
                // decode other fields
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }

        return decodedMessage;
    }

    fromJSON(object: any): any {
        return {
            firstName: object.firstName,
            lastName: object.lastName,
            dob: object.dob,
            gender: object.gender,
            household: object.household,
            status: object.status,
            monthlyIncome: object.monthlyIncome,
            monthlySavings: object.monthlySavings,
            monthlyCharcoal: object.monthlyCharcoal,
            monthlyCharcoalExpense: object.monthlyCharcoalExpense,
            stoveUsage: object.stoveUsage,
            village: object.village,
            profilePicture: object.profilePicture,
            latitude: object.latitude,
            longitude: object.longitude,
            phoneNumber: object.phoneNumber,
            verbalLanguage: object.verbalLanguage,
            capturedPolicy: object.capturedPolicy,
        };
    }

    fromPartial(object: any): any {
        return {
            firstName: object.firstName || '',
            lastName: object.lastName || '',
            dob: object.dob || '',
            gender: object.gender || '',
            household: object.household || 0,
            status: object.status || '',
            monthlyIncome: object.monthlyIncome || 0,
            monthlySavings: object.monthlySavings || 0,
            monthlyCharcoal: object.monthlyCharcoal || 0,
            monthlyCharcoalExpense: object.monthlyCharcoalExpense || 0,
            stoveUsage: object.stoveUsage || '',
            village: object.village || '',
            profilePicture: object.profilePicture || '',
            latitude: object.latitude || '',
            longitude: object.longitude || '',
            phoneNumber: object.phoneNumber || '',
            verbalLanguage: object.verbalLanguage || '',
            capturedPolicy: object.capturedPolicy || '',
        };
    }

    toJSON(message: any): unknown {
        return {
            firstName: message.firstName,
            lastName: message.lastName,
            dob: message.dob,
            gender: message.gender,
            household: message.household,
            status: message.status,
            monthlyIncome: message.monthlyIncome,
            monthlySavings: message.monthlySavings,
            monthlyCharcoal: message.monthlyCharcoal,
            monthlyCharcoalExpense: message.monthlyCharcoalExpense,
            stoveUsage: message.stoveUsage,
            village: message.village,
            profilePicture: message.profilePicture,
            latitude: message.latitude,
            longitude: message.longitude,
            phoneNumber: message.phoneNumber,
            verbalLanguage: message.verbalLanguage,
            capturedPolicy: message.capturedPolicy,
        };
    }

    static fromPartial(data: Partial<MsgStoreUserData>): MsgStoreUserData {
        return new MsgStoreUserData({
            firstName: data.firstName || '',
            lastName: data.lastName || '',
            dob: data.dob || '',
            gender: data.gender || '',
            household: data.household || 0,
            status: data.status || '',
            monthlyIncome: data.monthlyIncome || 0,
            monthlySavings: data.monthlySavings || 0,
            monthlyCharcoal: data.monthlyCharcoal || 0,
            monthlyCharcoalExpense: data.monthlyCharcoalExpense || 0,
            stoveUsage: data.stoveUsage || '',
            village: data.village || '',
            profilePicture: data.profilePicture || '',
            latitude: data.latitude || '',
            longitude: data.longitude || '',
            phoneNumber: data.phoneNumber || '',
            verbalLanguage: data.verbalLanguage || '',
            capturedPolicy: data.capturedPolicy || '',
        });
    }

}