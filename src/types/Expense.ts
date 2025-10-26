export interface Expense {
    id: string;
    date: string; 
    type: 'Accommodation' | 'Travel Ticket' | 'Fuel' | 'Toll Road / Parking' | 'Client Entertainment' | 'Other';
    description: string;
    amount: number;
    currency: 'PLN' | 'EUR' | 'USD';
}
