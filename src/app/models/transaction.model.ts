import { TimestampProvider } from "rxjs";

export class Transaction {

    transactionId: number = 0;
    // @ts-ignore
    transactionDate: TimestampProvider;
    cartId: number = 0;
}