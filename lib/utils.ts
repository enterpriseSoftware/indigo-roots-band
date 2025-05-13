import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Convert a Prisma object into a regular JS object
export function convertToPlainObject<T>(value: T): T {
  if (value === null || value === undefined) {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map(item => convertToPlainObject(item)) as T;
  }

  if (typeof value === 'object') {
    const result: Record<string, unknown> = {};
    for (const [key, val] of Object.entries(value)) {
      // Handle Prisma Decimal types
      if (val && typeof val === 'object' && 'toJSON' in val) {
        const decimalValue = val.toJSON();
        // Convert to string with 2 decimal places
        result[key] = formatNumberWithDecimal(Number(decimalValue));
      } else {
        result[key] = convertToPlainObject(val);
      }
    }
    return result as T;
  }

  return value;
}

//format number with decimal places
export function formatNumberWithDecimal(num: number):string {
   const [int,decimal] = num.toString().split('.');
   return decimal ? `${int}.${decimal.padEnd(2,'0')}` : `${int}.00`;
}

//format date to a human readable format

