export declare class AppEncryption {
    private readonly algorithm;
    private key;
    private readonly iv;
    private static _instance;
    private AppEncryption;
    static instance(): AppEncryption;
    setKey(key: any): AppEncryption;
    encryptText(text: string): string;
    decryptText(encryptedText: string): string;
}
