function extractMessageDetailsTelebirr(messageText: string): any {
    const pattern = /received\s+ETB\s+(?<amount>[\d,.]+)\s+from\s+(?<senderFirstName>[a-zA-Z]+)(?:\s+(?<senderLastName>[^\(]+))?/;

    const match = messageText.match(pattern);

    if (match && match.groups) {
        const { amount, senderFirstName, senderLastName } = match.groups;

        const transactionDetails = {
            amount: amount,
            senderFirstName: senderFirstName,
            senderLastName: senderLastName ? senderLastName.trim() : ''
        };

        return transactionDetails;
    }
}

function notificationTelebirr(transactionDetails: any): string {
    const fullName = [transactionDetails.senderFirstName, transactionDetails.senderLastName].filter(Boolean).join(' ');
    return `Received ${transactionDetails.amount} birr from ${fullName}`;
}

export { extractMessageDetailsTelebirr, notificationTelebirr };