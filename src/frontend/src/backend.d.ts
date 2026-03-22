import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface RestaurantInfo {
    name: string;
    description: string;
    email: string;
    address: string;
    phone: string;
}
export interface MenuItem {
    id: bigint;
    name: string;
    description: string;
    price: bigint;
}
export interface backendInterface {
    getMenuItem(id: bigint): Promise<MenuItem>;
    getMenuSortedByName(): Promise<Array<MenuItem>>;
    getMenuSortedByPrice(): Promise<Array<MenuItem>>;
    getRestaurantInfo(): Promise<RestaurantInfo>;
}
