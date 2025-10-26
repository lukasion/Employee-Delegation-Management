import { Expense } from "@/types/Expense"
import { MileageLog } from "@/types/MileageLog"

export interface Delegation {
    id: string;
    employeeId: string;
    delegationNumber: string;
    destination: string;
    purpose: string;
    startDate: string;
    endDate: string;
    status: 'DRAFT' | 'APPROVED' | 'IN_PROGRESS' | 'SETTLEMENT' | 'CLOSED';
    transportMode: 'Private Car' | 'Company Car' | 'Train' | 'Plane' | 'Other';
    advancePayment: number;

    expenses: Expense[];
    mileageLogs: MileageLog[];
}