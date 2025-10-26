export interface Vehicle {
    id: string;
    name: string;
    licensePlate: string;
    type: 'Company' | 'Private';
    mileageRate: number;
}